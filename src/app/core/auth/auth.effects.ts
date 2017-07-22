import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { Action } from '../core.interfaces';

import {
  AUTH_KEY,
  AUTH_LOGIN,
  AUTH_LOGOUT
} from './auth.reducer';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false }) login(): Observable<Action> {
    return this.actions$
      .ofType(AUTH_LOGIN)
      .do(action => this.localStorageService
        .setItem(AUTH_KEY, { isAuthenticated: true }));
  }

  @Effect({ dispatch: false }) logout(): Observable<Action> {
    return this.actions$
      .ofType(AUTH_LOGOUT)
      .do(action => this.localStorageService
        .setItem(AUTH_KEY, { isAuthenticated: false }));
  }

}
