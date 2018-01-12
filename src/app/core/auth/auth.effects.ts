import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { AUTH_KEY, AuthActionTypes } from './auth.reducer';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  login(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.LOGIN)
      .pipe(
        tap(action =>
          this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true })
        )
      );
  }

  @Effect({ dispatch: false })
  logout(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.LOGOUT)
      .pipe(
        tap(action =>
          this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: false })
        )
      );
  }
}
