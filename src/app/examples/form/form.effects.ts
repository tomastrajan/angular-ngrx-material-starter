import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { ActionFormSave, FormActionTypes } from './form.actions';

export const FORM_KEY = 'EXAMPLES.FORM';
@Injectable()
export class FormEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  saveForm() {
    return this.actions$.pipe(
      ofType<ActionFormSave>(FormActionTypes.SAVE),
      tap(action =>
        this.localStorageService.setItem(FORM_KEY, action.payload.form)
      )
    );
  }
}
