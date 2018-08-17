import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { ActionTodosPersist, TodosActionTypes } from './todos.actions';

export const TODOS_KEY = 'EXAMPLES.TODOS';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos() {
    return this.actions$.pipe(
      ofType<ActionTodosPersist>(TodosActionTypes.PERSIST),
      tap(action =>
        this.localStorageService.setItem(TODOS_KEY, action.payload.todos)
      )
    );
  }
}
