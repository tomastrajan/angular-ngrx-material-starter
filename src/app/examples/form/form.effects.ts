import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import {
  ActionFormRetrieve,
  ActionFormRetrieveError,
  ActionFormRetrieveSuccess,
  FormActionTypes
} from './form.actions';

export const FORM_KEY = 'EXAMPLES.FORM';

@Injectable()
export class FormEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect()
  retrieveForm() {
    return this.actions$.pipe(
      ofType<ActionFormRetrieve>(FormActionTypes.RETRIEVE),
      tap(action => this.localStorageService.setItem(FORM_KEY, action.payload)),
      switchMap((action: ActionFormRetrieve) =>
        of(this.localStorageService.getItem(FORM_KEY)).pipe(
          tap(console.log),
          map(form => new ActionFormRetrieveSuccess({ form })),
          catchError(error => of(new ActionFormRetrieveError({ error })))
        )
      )
    );
  }
}
