import * as assert from 'assert';
import { Router } from '@angular/router';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { authLogin, authLogout } from './auth.actions';
import { AuthEffects, AUTH_KEY } from './auth.effects';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('AuthEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem'
    ]);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  });

  describe('login', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, localStorageService, router);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.login.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const loginAction = authLogin();
        const source = cold('a', { a: loginAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, localStorageService, router);

        effect.login.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(AUTH_KEY, {
            isAuthenticated: true
          });
        });
      });
    });
  });

  describe('logout', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, localStorageService, router);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.logout.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService and navigate to about', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const logoutAction = authLogout();
        const source = cold('a', { a: logoutAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, localStorageService, router);

        effect.login.subscribe(() => {
          expect(localStorageService.setItem).toHaveBeenCalledWith(AUTH_KEY, {
            isAuthenticated: false
          });
          expect(router.navigate).toHaveBeenCalledWith(['']);
        });
      });
    });
  });
});
