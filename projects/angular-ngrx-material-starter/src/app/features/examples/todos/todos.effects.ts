import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import { State } from '../examples.state';
import { TodosActionTypes } from './todos.actions';
import { selectTodosState } from './todos.selectors';

export const TODOS_KEY = 'EXAMPLES.TODOS';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos = this.actions$.pipe(
    ofType(
      TodosActionTypes.ADD,
      TodosActionTypes.FILTER,
      TodosActionTypes.REMOVE_DONE,
      TodosActionTypes.TOGGLE
    ),
    withLatestFrom(this.store.pipe(select(selectTodosState))),
    tap(([action, todos]) => this.localStorageService.setItem(TODOS_KEY, todos))
  );
}
