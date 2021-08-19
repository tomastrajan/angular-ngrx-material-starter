import { By } from '@angular/platform-browser';
import { HarnessLoader } from '@angular/cdk/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../../../shared/shared.module';

import * as todoActions from '../todos.actions';
import { Todo, TodosFilter } from '../todos.model';
import { TodosContainerComponent } from './todos-container.component';
import {
  selectRemoveDoneTodosDisabled,
  selectTodos,
  selectTodosFilter
} from '../todos.selectors';

describe('TodosComponent', () => {
  let store: MockStore;
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let dispatchSpy: jasmine.Spy;
  let mockSelectTodos: MemoizedSelector<any, Todo[]>;
  let mockSelectTodosFilter: MemoizedSelector<any, TodosFilter>;
  let mockSelectRemoveDoneTodosDisabled: MemoizedSelector<any, boolean>;
  let loader: HarnessLoader;

  const getOpenFilterButton = () =>
    loader.getHarness(MatButtonHarness.with({ selector: '.todos-filter' }));

  const getFilterActiveButton = async () => {
    const menu = await loader.getHarness(MatMenuHarness);
    const items = await menu.getItems();
    return items[2];
  };

  const getTodoInput = () =>
    fixture.debugElement.query(By.css('anms-big-input input'));

  const getTodoItems = () => fixture.debugElement.queryAll(By.css('.todo'));

  const getTodoItem = () => fixture.debugElement.query(By.css('.todo-label'));

  const getAddTodoButton = async () => {
    const buttons = await loader.getAllHarnesses(
      MatButtonHarness.with({ selector: 'anms-big-input-action button' })
    );
    return buttons[0];
  };

  const getRemoveDoneTodosButton = async () => {
    const buttons = await loader.getAllHarnesses(
      MatButtonHarness.with({ selector: 'anms-big-input-action button' })
    );
    return buttons[1];
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [TodosContainerComponent],
      providers: [provideMockStore()]
    });

    store = TestBed.inject(MockStore);
    mockSelectTodos = store.overrideSelector(selectTodos, []);
    mockSelectTodosFilter = store.overrideSelector(selectTodosFilter, 'ACTIVE');
    mockSelectRemoveDoneTodosDisabled = store.overrideSelector(
      selectRemoveDoneTodosDisabled,
      true
    );
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);

    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should be created with 0 todos', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(getTodoItems().length).toBe(0);
  });

  it('should display todos', () => {
    mockSelectTodos.setResult([{ id: '1', name: 'test', done: false }]);
    store.refreshState();
    fixture.detectChanges();

    expect(getTodoItems().length).toBe(1);
    expect(getTodoItems()[0].nativeElement.textContent.trim()).toBe('test');
  });

  it('should dispatch remove "DONE" todos action', async () => {
    mockSelectTodos.setResult([
      { id: '1', name: 'test 1', done: true },
      { id: '2', name: 'test 2', done: false }
    ]);
    mockSelectRemoveDoneTodosDisabled.setResult(false);
    store.refreshState();
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    const removeDoneTodosButton = await getRemoveDoneTodosButton();
    await removeDoneTodosButton.click();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosRemoveDone()
    );
  });

  it('should dispatch add todo action', async () => {
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    const keyUpEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getTodoInput().nativeElement.value = 'hello world';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();

    const addTodoButton = await getAddTodoButton();
    await addTodoButton.click();

    expect(getTodoInput().nativeElement.value).toBe('');
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].name).toBe('hello world');
  });

  it('should dispatch filter todo action', async () => {
    dispatchSpy.calls.reset();

    const openFilterButton = await getOpenFilterButton();
    await openFilterButton.click();

    const filterActiveButton = await getFilterActiveButton();
    await filterActiveButton.click();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosFilter({ filter: 'ACTIVE' })
    );
  });

  it('should dispatch toggle todo action', () => {
    mockSelectTodos.setResult([{ id: '1', name: 'test 1', done: true }]);
    store.refreshState();
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    getTodoItem().nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosToggle({ id: '1' })
    );
  });

  it('should disable remove done todos button if no todo is done', async () => {
    fixture.detectChanges();

    const removeDoneTodosButton = await getRemoveDoneTodosButton();
    const removeDoneTodosButtonIsDisabled =
      await removeDoneTodosButton.isDisabled();

    expect(removeDoneTodosButtonIsDisabled).toBe(true);
  });

  it('should disable add new todo button if input length is less than 4', async () => {
    fixture.detectChanges();

    const keyUpEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getTodoInput().nativeElement.value = 'add';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();
    const addTodoButton = await getAddTodoButton();
    let addTodoButtonIsDisabled = await addTodoButton.isDisabled();

    expect(addTodoButtonIsDisabled).toBe(true);

    getTodoInput().nativeElement.value = 'long enough';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();

    addTodoButtonIsDisabled = await addTodoButton.isDisabled();
    expect(addTodoButtonIsDisabled).toBe(false);
  });

  it('should clear new todo input value on ESC key press', () => {
    fixture.detectChanges();

    const keyUpEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getTodoInput().nativeElement.value = 'hello world';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();

    const escKeypUp = new KeyboardEvent('keyup', {
      key: 'Escape',
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });
    getTodoInput().nativeElement.dispatchEvent(escKeypUp);
    fixture.detectChanges();

    expect(getTodoInput().nativeElement.value).toBe('');
  });
});
