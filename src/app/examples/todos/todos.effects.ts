import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService, Action } from '@app/core';

import { TODOS_KEY, TODOS_PERSIST } from './todos.reducer';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(TODOS_PERSIST)
      .pipe(
        tap(action =>
          this.localStorageService.setItem(TODOS_KEY, action.payload)
        )
      );
  }
}
