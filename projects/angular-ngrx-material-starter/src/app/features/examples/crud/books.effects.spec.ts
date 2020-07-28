import * as assert from 'assert';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../../../core/core.module';

import { BookState } from './books.model';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { BooksEffects, BOOKS_KEY } from './books.effects';
import { actionBooksDeleteOne, actionBooksUpsertOne } from './books.actions';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('BooksEffects', () => {
  describe('persistBooks', () => {
    const booksState: BookState = {
      entities: {
        '1': {
          author: 'Author',
          description: 'Description',
          id: '1',
          title: 'Title'
        }
      },
      ids: ['1']
    };
    let localStorage: LocalStorageService;
    let store: Store<any>;

    beforeEach(() => {
      localStorage = jasmine.createSpyObj('localStorage', ['setItem']);
      store = of({
        examples: {
          books: booksState
        }
      }) as any;
    });

    it('should not dispatch any actions', () => {
      const actions = new Actions(EMPTY);
      const effects = new BooksEffects(actions, store, localStorage);
      const metadata = getEffectsMetadata(effects);

      expect(metadata.persistBooks.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService for delete one action', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const action = actionBooksDeleteOne({ id: '1' });
        const source = cold('a', { a: action });
        const actions = new Actions(source);
        const effects = new BooksEffects(actions, store, localStorage);

        effects.persistBooks.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            BOOKS_KEY,
            booksState
          );
        });
      });
    });

    it('should call setItem on LocalStorageService for upsert one action', () => {
      scheduler.run((helpers) => {
        const { cold } = helpers;
        const action = actionBooksUpsertOne({ book: {} as any });
        const source = cold('a', { a: action });
        const actions = new Actions(source);
        const effects = new BooksEffects(actions, store, localStorage);

        effects.persistBooks.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            BOOKS_KEY,
            booksState
          );
        });
      });
    });
  });
});
