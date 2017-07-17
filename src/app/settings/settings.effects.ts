import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { LocalStorageService, Action } from '@app/core';

import {
  SETTINGS_KEY,
  SETTINGS_CHANGE_THEME,
} from './settings.reducer';

@Injectable()
export class SettingsEffects {

  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false }) persistThemeSettings(): Observable<Action> {
    return this.actions$
      .ofType(SETTINGS_CHANGE_THEME)
      .do(action => this.localStorageService
        .setItem(SETTINGS_KEY, { theme: action.payload }));
  }

}
