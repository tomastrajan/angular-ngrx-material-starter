import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { MockStore, TestingModule } from '@testing/utils';

import {
  ActionTodosFilter,
  ActionTodosRemoveDone,
  ActionTodosToggle
} from '../todos.actions';
import { TodosState } from '../todos.model';
import { TodosContainerComponent } from './todos-container.component';
import { State } from '../../examples.state';

describe('TodosComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let store: MockStore<State>;
  let dispatchSpy;

  const getTodos = () => fixture.debugElement.queryAll(By.css('.todo'));

  const getBigInput = () =>
    fixture.debugElement.query(By.css('anms-big-input'));

  const getBigInputValue = () =>
    getBigInput().query(By.css('input')).nativeElement.value;

  const getTodosFilter = () =>
    fixture.debugElement.query(By.css('.todos-filter'));

  const getTodosFilterOptions = () =>
    fixture.debugElement.queryAll(
      By.css('.todos-filter-menu-overlay .mat-menu-item')
    );

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
        declarations: [TodosContainerComponent],
        imports: [TestingModule]
      }).compileComponents();

      store = TestBed.get(Store);
      store.setState(createState({ items: [], filter: 'ALL' }));
      fixture = TestBed.createComponent(TodosContainerComponent);
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
    store.setState(
      createState({
        items: [{ id: '1', name: 'test', done: false }],
        filter: 'ALL'
      })
    );

    fixture.detectChanges();
    expect(getTodos().length).toBe(1);
    expect(getTodos()[0].nativeElement.textContent.trim()).toBe('test');
  });

  it('should filter and show "DONE" todos', () => {
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
    expect(getTodos().length).toBe(1);
    expect(getTodos()[0].nativeElement.textContent.trim()).toBe('test 1');
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
    expect(component.newTodo).toBe('');
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].payload.name).toBe('test');
  });

  it('should dispatch filter todo action', () => {
    dispatchSpy = spyOn(store, 'dispatch');
    getTodosFilter().triggerEventHandler('click', {});
    getTodosFilterOptions()[2].triggerEventHandler('click', {});

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionTodosFilter({ filter: 'ACTIVE' })
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
    dispatchSpy = spyOn(store, 'dispatch');
    getTodos()[0]
      .query(By.css('.todo-label'))
      .triggerEventHandler('click', {});

    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new ActionTodosToggle({ id: '1' })
    );
  });

  it('should disable remove done todos button if no todo is done', () => {
    store.setState(
      createState({
        items: [{ id: '1', name: 'test 1', done: true }],
        filter: 'ALL'
      })
    );

    fixture.detectChanges();
    expect(deleteDoneTodosBtn().nativeElement.disabled).toBeFalsy();

    component.todos.items[0].done = false;

    fixture.detectChanges();
    expect(deleteDoneTodosBtn().nativeElement.disabled).toBeTruthy();
  });

  it('should disable add new todo button if input length is less than 4', () => {
    component.newTodo = 'test';

    fixture.detectChanges();
    expect(addTodoBtn().nativeElement.disabled).toBeFalsy();

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

function createState(todoState: TodosState) {
  return {
    examples: {
      todos: todoState
    }
  } as State;
}
