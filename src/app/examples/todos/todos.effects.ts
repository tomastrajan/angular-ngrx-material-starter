import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../../core';

import {
  TODOS_KEY,
  TODOS_PERSIST,
} from './todos.reducer';

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false }) persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(TODOS_PERSIST)
      .do(action => this.localStorageService
        .setItem(TODOS_KEY, action.payload));
  }

}
