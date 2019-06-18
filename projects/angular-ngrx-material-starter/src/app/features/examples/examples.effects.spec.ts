import * as assert from 'assert';
import { ActivationEnd } from '@angular/router';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  TitleService,
  SettingsActions,
  ActionSettingsChangeLanguage
} from '../../core/core.module';

import { ExamplesEffects } from './examples.effects';
import { State } from './examples.state';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('SettingsEffects', () => {
  let router: any;
  let titleService: jasmine.SpyObj<TitleService>;
  let translateService: jasmine.SpyObj<TranslateService>;
  let store: jasmine.SpyObj<Store<State>>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {
          root: {}
        }
      },
      events: {
        pipe() {}
      }
    };

    titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
    translateService = jasmine.createSpyObj('TranslateService', ['use']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('setTranslateServiceLanguage', () => {
    it('should not dispatch action', function() {
      const actions = new Actions<SettingsActions>();
      const effect = new ExamplesEffects(
        actions,
        store,
        translateService,
        router,
        titleService
      );
      const metadata = getEffectsMetadata(effect);

      expect(metadata.setTranslateServiceLanguage.dispatch).toEqual(false);
    });
  });

  describe('setTitle', () => {
    it('should not dispatch action', function() {
      const actions = new Actions<SettingsActions>();
      const effect = new ExamplesEffects(
        actions,
        store,
        translateService,
        router,
        titleService
      );
      const metadata = getEffectsMetadata(effect);

      expect(metadata.setTitle.dispatch).toEqual(false);
    });

    it('should setTitle', function() {
      scheduler.run(helpers => {
        const { cold, hot } = helpers;
        const action = new ActionSettingsChangeLanguage({ language: 'en' });
        const actions = hot('-a', { a: action });

        const routerEvent = new ActivationEnd(router.routerState.snapshot);
        router.events = cold('a', { a: routerEvent });

        const effect = new ExamplesEffects(
          actions,
          store,
          translateService,
          router,
          titleService
        );

        effect.setTitle.subscribe(() => {
          expect(titleService.setTitle).toHaveBeenCalled();
          expect(titleService.setTitle).toHaveBeenCalledWith(
            router.routerState.snapshot.root,
            translateService
          );
        });
      });
    });
  });
});
