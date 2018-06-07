import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { TodosComponent } from './todos.component';
import { Store, StoreModule } from '@ngrx/store';

import {
  todosReducer,
  ActionTodosAdd,
  ActionTodosToggle,
  ActionTodosFilter
} from './todos.reducer';

import { By } from '@angular/platform-browser';

import { resetStateTestMetaReducer } from '@app/../test-utils';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  const getTodos = () => fixture.debugElement.queryAll(By.css('.todo'));
  const deleteDoneTodosBtn = () =>
    fixture.debugElement.query(
      By.css('anms-big-input-action[icon="delete_forever"] > button')
    );
  const addTodoBtn = () =>
    fixture.debugElement.query(
      By.css('anms-big-input-action[icon="add"] > button')
    );

  const setTodosFromArray = function(
    names: string[],
    toggleTheLastOne: boolean
  ) {
    const store = fixture.debugElement.injector.get(Store);
    names.forEach(name => store.dispatch(new ActionTodosAdd({ name })));
    if (toggleTheLastOne) {
      store.dispatch(
        new ActionTodosToggle({
          id: component.todos.items.find(
            todo => todo.name === names[names.length - 1]
          ).id
        })
      );
    }
    return store;
  };
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        imports: [
          NoopAnimationsModule,
          RouterTestingModule,
          CoreModule,
          SharedModule,
          StoreModule.forFeature('examples', {
            todos: resetStateTestMetaReducer({ items: [], filter: 'ALL' })(
              todosReducer
            )
          })
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display todos', () => {
    expect(component.todos.items.length).toBe(0);
    expect(getTodos().length).toBe(0);
  });

  it('when some sate contains some todos - component must show them', () => {
    expect(component.todos.items.length).toBe(0);

    setTodosFromArray(['SOME TODO', 'SOME OTHER TODO'], false);

    fixture.detectChanges();
    expect(getTodos().length).toBe(2);
  });

  it('should show only "DONE" todos after setting filter to "DONE"', () => {
    const store = setTodosFromArray(['SOME TODO', 'SOME OTHER TODO'], true);

    store.dispatch(new ActionTodosFilter({ filter: 'DONE' }));

    fixture.detectChanges();
    expect(getTodos().length).toBe(1);
    expect(
      getTodos()[0].nativeElement.querySelector('.todo-label').innerHTML
    ).toContain('SOME OTHER TODO');
  });

  it('should remove "DONE" todos when clicking "Remove Done Todos" button', () => {
    setTodosFromArray(['SOME TODO', 'SOME OTHER TODO', 'ONE MORE TODO'], true);
    deleteDoneTodosBtn().triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(getTodos().length).toBe(2);
    const existingTodos = getTodos()
      .map(elem =>
        elem.nativeElement.querySelector('.todo-label').textContent.trim()
      )
      .join(',');
    component.todos.items.forEach(item => {
      expect(existingTodos).toContain(item.name);
    });
  });

  it(
    'should add new todo when input has some text and "Add Todo" button clicked',
    fakeAsync(() => {
      expect(component.todos.items.length).toBe(0);

      component.newTodo = 'NEW TODO';

      addTodoBtn().triggerEventHandler('click', {});
      fixture.detectChanges();
      tick(2500);
      expect(getTodos().length).toBe(1);
      expect(component.todos.items[0].name).toContain('NEW TODO');
    })
  );
});
