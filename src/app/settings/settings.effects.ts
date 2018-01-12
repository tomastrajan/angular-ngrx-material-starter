import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService } from '@app/core';

import {
  SETTINGS_KEY,
  SettingsActionTypes,
  ActionSettingsChangeTheme
} from './settings.reducer';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistThemeSettings(): Observable<Action> {
    return this.actions$.ofType(SettingsActionTypes.CHANGE_THEME).pipe(
      tap((action: ActionSettingsChangeTheme) =>
        this.localStorageService.setItem(SETTINGS_KEY, {
          theme: action.payload.theme
        })
      )
    );
  }
}
