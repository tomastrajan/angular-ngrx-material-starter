import { AnimationsService, LocalStorageService } from '@app/core';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';

import { SettingsEffects, SETTINGS_KEY } from './settings.effects';
import { SettingsState } from './settings.model';
import { ActionSettingsChangeTheme } from './settings.actions';
import { Store } from '@ngrx/store';
import { State } from '@app/examples/examples.state';

describe('SettingsEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let animationsService: jasmine.SpyObj<AnimationsService>;
  let store: jasmine.SpyObj<Store<State>>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem'
    ]);
    animationsService = jasmine.createSpyObj('AnimationsService', [
      'updateRouteAnimationType'
    ]);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('persistSettings', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions();
      const effect = new SettingsEffects(
        actions,
        store,
        localStorageService,
        animationsService
      );
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistSettings).toEqual({ dispatch: false });
    });
  });

  it('should call methods on AnimationsService and LocalStorageService for PERSIST action', () => {
    const settings: SettingsState = {
      language: 'en',
      pageAnimations: true,
      elementsAnimations: true,
      theme: 'default',
      autoNightMode: false,
      stickyHeader: false,
      pageAnimationsDisabled: true
    };
    store.pipe.and.returnValue(of(settings));
    const persistAction = new ActionSettingsChangeTheme({ theme: 'DEFAULT' });
    const source = cold('a', { a: persistAction });
    const actions = new Actions(source);
    const effect = new SettingsEffects(
      actions,
      store,
      localStorageService,
      animationsService
    );

    effect.persistSettings.subscribe(() => {
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        SETTINGS_KEY,
        settings
      );
      expect(animationsService.updateRouteAnimationType).toHaveBeenCalledWith(
        true,
        true
      );
    });
  });
});
