import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../../../shared/shared.module';

import * as todoActions from '../todos.actions';
import { TodosState } from '../todos.model';
import { TodosContainerComponent } from './todos-container.component';
import { State } from '../../examples.state';

describe('TodosComponent', () => {
  let store: MockStore<State>;
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let dispatchSpy: jasmine.Spy;

  const getOpenFilterButton = () =>
    fixture.debugElement.query(By.css('.todos-filter'));

  const getFilterActiveButton = () =>
    fixture.debugElement.queryAll(
      By.css('.todos-filter-menu-overlay button')
    )[2];

  const getTodoInput = () =>
    fixture.debugElement.query(By.css('anms-big-input input'));

  const getTodoItems = () => fixture.debugElement.queryAll(By.css('.todo'));

  const getTodoItem = () => fixture.debugElement.query(By.css('.todo-label'));

  const getAddTodoButton = () =>
    fixture.debugElement
      .queryAll(By.css('anms-big-input-action'))[0]
      .query(By.css('button'));

  const getRemoveDoneTodosButton = () =>
    fixture.debugElement
      .queryAll(By.css('anms-big-input-action'))[1]
      .query(By.css('button'));

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [TodosContainerComponent],
      providers: [
        provideMockStore({
          initialState: createState({
            items: [],
            filter: 'ALL'
          })
        })
      ]
    });

    store = TestBed.get(Store);
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should be created with 0 todos', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(getTodoItems().length).toBe(0);
  });

  it('should display todos', () => {
    store.setState(
      createState({
        items: [{ id: '1', name: 'test', done: false }],
        filter: 'ALL'
      })
    );

    fixture.detectChanges();

    expect(getTodoItems().length).toBe(1);
    expect(getTodoItems()[0].nativeElement.textContent.trim()).toBe('test');
  });

  it('should dispatch remove "DONE" todos action', () => {
    store.setState(
      createState({
        items: [
          { id: '1', name: 'test 1', done: true },
          { id: '2', name: 'test 2', done: false }
        ],
        filter: 'DONE'
      })
    );
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    getRemoveDoneTodosButton().nativeElement.click();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosRemoveDone()
    );
  });

  it('should dispatch add todo action', () => {
    store.setState(createState({ items: [], filter: 'ALL' }));
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

    getAddTodoButton().nativeElement.click();

    fixture.detectChanges();

    expect(getTodoInput().nativeElement.value).toBe('');
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    console.log(dispatchSpy.calls.mostRecent().args[0]);
    expect(dispatchSpy.calls.mostRecent().args[0].name).toBe('hello world');
  });

  it('should dispatch filter todo action', () => {
    store.setState(createState({ items: [], filter: 'ALL' }));
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    getOpenFilterButton().nativeElement.click();
    fixture.detectChanges();

    getFilterActiveButton().nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosFilter({ filter: 'ACTIVE' })
    );
  });

  it('should dispatch toggle todo action', () => {
    store.setState(
      createState({
        items: [{ id: '1', name: 'test 1', done: true }],
        filter: 'ALL'
      })
    );
    fixture.detectChanges();
    dispatchSpy.calls.reset();

    getTodoItem().nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      todoActions.actionTodosToggle({ id: '1' })
    );
  });

  it('should disable remove done todos button if no todo is done', () => {
    store.setState(
      createState({
        items: [{ id: '1', name: 'test 1', done: false }],
        filter: 'ALL'
      })
    );
    fixture.detectChanges();

    expect(getRemoveDoneTodosButton().nativeElement.disabled).toBe(true);
  });

  it('should disable add new todo button if input length is less than 4', () => {
    store.setState(createState({ items: [], filter: 'ALL' }));
    fixture.detectChanges();

    const keyUpEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false
    });

    getTodoInput().nativeElement.value = 'add';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();

    expect(getAddTodoButton().nativeElement.disabled).toBe(true);

    getTodoInput().nativeElement.value = 'long enough';
    getTodoInput().nativeElement.dispatchEvent(keyUpEvent);
    fixture.detectChanges();

    expect(getAddTodoButton().nativeElement.disabled).toBe(false);
  });

  it('should clear new todo input value on ESC key press', () => {
    store.setState(createState({ items: [], filter: 'ALL' }));
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

function createState(todosState: TodosState) {
  return {
    examples: {
      todos: todosState
    }
  } as State;
}
