import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';

import {
  AnimationsService,
  LocalStorageService,
  TitleService
} from '@app/core';

import { SettingsEffects, SETTINGS_KEY } from './settings.effects';
import { SettingsState, State } from './settings.model';
import { ActionSettingsChangeTheme, SettingsActions } from './settings.actions';

describe('SettingsEffects', () => {
  let router: any;
  let localStorageService: LocalStorageService;
  let overlayContainer: OverlayContainer;
  let titleService: TitleService;
  let animationsService: AnimationsService;
  let translateService: TranslateService;
  let store: Store<State>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        pipe() {}
      }
    };
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem'
    ]);
    overlayContainer = jasmine.createSpyObj('OverlayContainer', [
      'getContainerElement'
    ]);
    titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
    animationsService = jasmine.createSpyObj('AnimationsService', [
      'updateRouteAnimationType'
    ]);
    translateService = jasmine.createSpyObj('TranslateService', ['use']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('persistSettings', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions<SettingsActions>();
      const effect = new SettingsEffects(
        actions,
        store,
        router,
        overlayContainer,
        localStorageService,
        titleService,
        animationsService,
        translateService
      );
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistSettings).toEqual({ dispatch: false });
    });
  });

  it('should call methods on LocalStorageService for PERSIST action', () => {
    const settings: SettingsState = {
      language: 'en',
      pageAnimations: true,
      elementsAnimations: true,
      theme: 'default',
      nightTheme: 'default',
      autoNightMode: false,
      stickyHeader: false,
      pageAnimationsDisabled: true,
      hour: 12
    };
    (store.pipe as jasmine.Spy).and.returnValue(of(settings));
    const persistAction = new ActionSettingsChangeTheme({ theme: 'DEFAULT' });
    const source = cold('a', { a: persistAction });
    const actions = new Actions(source);
    const effect = new SettingsEffects(
      actions,
      store,
      router,
      overlayContainer,
      localStorageService,
      titleService,
      animationsService,
      translateService
    );

    effect.persistSettings.subscribe(() => {
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        SETTINGS_KEY,
        settings
      );
    });
  });
});
