import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '../core';

import {
  SETTINGS_KEY,
  SETTINGS_CHANGE_THEME,
  useThemeAction
} from './settings.reducer';

@Injectable()
export class SettingsEffects {

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  @Effect() persistThemeSettings(): Observable<Action> {
    return this.actions$
      .ofType(SETTINGS_CHANGE_THEME)
      .do(action => this.localStorageService
        .setItem(SETTINGS_KEY, { theme: action.payload }))
      .map(action => useThemeAction(action.payload));
  }

}
