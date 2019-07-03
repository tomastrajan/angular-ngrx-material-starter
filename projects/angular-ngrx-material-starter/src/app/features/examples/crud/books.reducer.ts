import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Book, BookState } from './books.model';
import { actionBooksDeleteOne, actionBooksUpsertOne } from './books.actions';
import { Action, createReducer, on } from '@ngrx/store';

export function sortByTitle(a: Book, b: Book): number {
  return a.title.localeCompare(b.title);
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  sortComparer: sortByTitle
});

export const initialState: BookState = bookAdapter.getInitialState({
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      title: 'Reactive Programming with Angular and ngrx',
      author: 'Oren Farhi',
      description:
        'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionBooksUpsertOne, (state, { book }) =>
    bookAdapter.upsertOne(book, state)
  ),
  on(actionBooksDeleteOne, (state, { id }) => bookAdapter.removeOne(id, state))
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return reducer(state, action);
}
