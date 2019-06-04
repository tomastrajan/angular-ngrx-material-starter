import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';
import { EMPTY } from 'rxjs';

import { LocalStorageService } from '../../core/core.module';

import { ActionFormUpdate } from './form.actions';
import { FormEffects, FORM_KEY } from './form.effects';
import { Form } from './form.model';

describe('FormEffects', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem'
    ]);
  });

  describe('persistForm', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new FormEffects(actions, localStorageService);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistForm.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService for UPDATE action', () => {
      const form: Form = {
        autosave: false,
        username: 'test',
        password: 'test',
        email: 'test@test.test',
        description: 'It is a test.',
        requestGift: true,
        birthday: new Date(),
        rating: 10
      };
      const action = new ActionFormUpdate({ form });
      const source = cold('a', { a: action });
      const actions = new Actions(source);
      const effect = new FormEffects(actions, localStorageService);

      effect.persistForm.subscribe(() => {
        expect(localStorageService.setItem).toHaveBeenCalledWith(FORM_KEY, {
          form
        });
      });
    });
  });
});
