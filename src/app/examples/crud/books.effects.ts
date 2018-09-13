import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { BookActionTypes, ActionBooksPersist } from './books.actions';

export const BOOKS_KEY = 'EXAMPLES.BOOKS';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistBooks() {
    return this.actions$.pipe(
      ofType<ActionBooksPersist>(BookActionTypes.PERSIST),
      tap(action => {
        return this.localStorageService.setItem(
          BOOKS_KEY,
          action.payload.books
        );
      })
    );
  }
}
