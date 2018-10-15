import { LocalStorageService } from '@app/core';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { EMPTY } from 'rxjs';
import { ActionTodosPersist } from './todos.actions';
import { TodosEffects, TODOS_KEY } from './todos.effects';
import { TodosState } from './todos.model';

describe('TodosEffects', () => {
  let localStorage: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    localStorage = jasmine.createSpyObj('LocalStorageService', ['setItem']);
  });

  describe('persistTodos', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new TodosEffects(actions, localStorage);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistTodos).toEqual({ dispatch: false });
    });

    it('should call setItem on LocalStorageService for PERSIST action', () => {
      const todosState: TodosState = {
        items: [{ id: '1', name: 'Test ToDo', done: false }],
        filter: 'ALL'
      };
      const persistAction = new ActionTodosPersist({ todos: todosState });
      const source = cold('a', { a: persistAction });
      const actions = new Actions(source);
      const effect = new TodosEffects(actions, localStorage);

      effect.persistTodos.subscribe(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith(
          TODOS_KEY,
          persistAction.payload.todos
        );
      });
    });
  });
});
