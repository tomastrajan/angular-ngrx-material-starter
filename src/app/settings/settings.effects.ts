import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService, AnimationsService } from '@app/core';

import { SettingsActionTypes } from './settings.actions';
import { State } from './settings.model';
import { selectSettingsState } from './settings.selectors';

export const SETTINGS_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private animationsService: AnimationsService
  ) {}

  @Effect({ dispatch: false })
  persistSettings = this.actions$.pipe(
    ofType(
      SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS,
      SettingsActionTypes.CHANGE_ANIMATIONS_PAGE,
      SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED,
      SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE,
      SettingsActionTypes.CHANGE_LANGUAGE,
      SettingsActionTypes.CHANGE_STICKY_HEADER,
      SettingsActionTypes.CHANGE_THEME
    ),
    withLatestFrom(this.store.pipe(select(selectSettingsState))),
    tap(([action, settings]) => {
      const { pageAnimations, elementsAnimations } = settings;
      this.localStorageService.setItem(SETTINGS_KEY, settings);
      this.animationsService.updateRouteAnimationType(
        pageAnimations,
        elementsAnimations
      );
    })
  );
}
