import { LocalStorageService } from '@app/core';
import { ActionBooksDeleteOne, ActionBooksUpsertOne } from './books.actions';
import { BookState } from './books.model';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { EMPTY, of } from 'rxjs';
import { BooksEffects, BOOKS_KEY } from './books.effects';

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

      expect(metadata.persistBooks).toEqual({ dispatch: false });
    });

    it('should call setItem on LocalStorageService for delete one action', () => {
      const action = new ActionBooksDeleteOne({ id: '1' });
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

    it('should call setItem on LocalStorageService for upsert one action', () => {
      const action = new ActionBooksUpsertOne({ book: {} as any });
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
