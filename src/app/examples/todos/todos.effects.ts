import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import {
  ActionTodosPersist,
  TODOS_KEY,
  TodosActionTypes
} from './todos.reducer';

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
