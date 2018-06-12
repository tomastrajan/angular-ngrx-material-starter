import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';

import { SharedModule } from '@app/shared';
import { TestStore } from '@testing/utils';

import { TodosComponent } from './todos.component';
import { ActionTodosToggle } from './todos.reducer';
import {
  ActionTodosAdd,
  ActionTodosRemoveDone,
  TodosState
} from './todos.reducer';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let store: TestStore<TodosState>;
  let dispatchSpy;

  const getTodos = () => fixture.debugElement.queryAll(By.css('.todo'));

  const getBigInput = () =>
    fixture.debugElement.query(By.css('anms-big-input'));

  const getBigInputValue = () =>
    getBigInput().query(By.css('input')).nativeElement.value;

  const deleteDoneTodosBtn = () =>
    fixture.debugElement.query(
      By.css('anms-big-input-action[fontIcon="fa-trash"] > button')
    );
  const addTodoBtn = () =>
    fixture.debugElement.query(
      By.css('anms-big-input-action[fontIcon="fa-plus"] > button')
    );

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        imports: [NoopAnimationsModule, SharedModule],
        providers: [{ provide: Store, useClass: TestStore }]
      }).compileComponents();
    })
  );

  beforeEach(
    inject([Store], (testStore: TestStore<TodosState>) => {
      store = testStore;
      store.setState({ items: [], filter: 'ALL' });
      fixture = TestBed.createComponent(TodosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should be created with 0 todos', () => {
    expect(component).toBeTruthy();
    expect(component.todos.items.length).toBe(0);
    expect(getTodos().length).toBe(0);
  });

  it('should display todos', () => {
    store.setState({
      items: [{ id: '1', name: 'test', done: false }],
      filter: 'ALL'
    });

    fixture.detectChanges();
    expect(getTodos().length).toBe(1);
    expect(getTodos()[0].nativeElement.textContent.trim()).toBe('test');
  });

  it('should filter and show "DONE" todos', () => {
    store.setState({
      items: [
        { id: '1', name: 'test 1', done: true },
        { id: '2', name: 'test 2', done: false }
      ],
      filter: 'DONE'
    });

    fixture.detectChanges();
    expect(getTodos().length).toBe(1);
    expect(getTodos()[0].nativeElement.textContent.trim()).toBe('test 1');
  });

  it('should dispatch remove "DONE" todos action', () => {
    store.setState({
      items: [
        { id: '1', name: 'test 1', done: true },
        { id: '2', name: 'test 2', done: false }
      ],
      filter: 'DONE'
    });

    fixture.detectChanges();
    dispatchSpy = spyOn(store, 'dispatch');
    deleteDoneTodosBtn().triggerEventHandler('click', {});

    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(new ActionTodosRemoveDone());
  });

  it('should dispatch add todo action', () => {
    dispatchSpy = spyOn(store, 'dispatch');
    component.newTodo = 'test';
    addTodoBtn().triggerEventHandler('click', {});

    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionTodosAdd({ name: 'test' })
    );
  });

  // TODO: should dispatch filter todo action (triggered by clicks in filter menu)
  it('should dispatch toggle todo action', () => {
    store.setState({
      items: [
        { id: '1', name: 'test 1', done: true },
        { id: '2', name: 'test 2', done: false }
      ],
      filter: 'ALL'
    });

    fixture.detectChanges();
    dispatchSpy = spyOn(store, 'dispatch');
    getTodos()[0]
      .query(By.css('.todo-label'))
      .triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionTodosToggle({ id: component.todos.items[0].id })
    );
  });

  it('should disable remove done todos button if no todo is done', () => {
    store.setState({
      items: [
        { id: '1', name: 'test 1', done: false },
        { id: '2', name: 'test 2', done: false }
      ],
      filter: 'ALL'
    });

    fixture.detectChanges();

    expect(deleteDoneTodosBtn().nativeElement.disabled).toBeTruthy();
  });

  it('should disable add new todo button if input length is less than 4', () => {
    component.newTodo = 'tes';

    fixture.detectChanges();
    expect(addTodoBtn().nativeElement.disabled).toBeTruthy();
  });

  it('should clear new todo input value on ESC key press', () => {
    component.newTodo = 'tes';
    getBigInput().triggerEventHandler('keyup.escape', {});
    fixture.detectChanges();
    expect(getBigInputValue()).toBe('');
  });
});
