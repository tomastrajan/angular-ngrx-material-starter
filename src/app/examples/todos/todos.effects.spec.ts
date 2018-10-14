import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@app/core';
import { TodosEffects, TODOS_KEY } from './todos.effects';
import { TodosState, TodosFilter, Todo } from './todos.model';
import { ActionTodosPersist } from './todos.actions';
import { cold } from 'jasmine-marbles';

describe('TodosEffects', () => {
  let actions$: Observable<Action>;
  let todosEffect: TodosEffects;
  let metadata: EffectsMetadata<TodosEffects>;
  let localStorageService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosEffects,
        provideMockActions(() => actions$),
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj('LocalStorageService', ['setItem'])
        }
      ]
    });
    localStorageService = TestBed.get(LocalStorageService);
    todosEffect = TestBed.get(TodosEffects);
  });

  it('should be created', () => {
    expect(todosEffect).toBeTruthy();
  });

  it('should not dispatch any action', () => {
    metadata = getEffectsMetadata(todosEffect);
    expect(metadata.persistTodos).toEqual({ dispatch: false });
  });

  it('should call setItem on LocalStorageService for PERSIST action', () => {
    const todosState: TodosState = {
      items: [{ id: '1', name: 'Test ToDo', done: false }],
      filter: 'ALL'
    };

    const persistAction = new ActionTodosPersist({ todos: todosState });
    actions$ = cold('a', { a: persistAction });
    todosEffect.persistTodos.subscribe(() => {
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        TODOS_KEY,
        persistAction.payload.todos
      );
    });
  });
});
