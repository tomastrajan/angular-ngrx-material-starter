import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Book, BookState } from './books.model';
import { BookActionTypes, BookActions } from './books.actions';

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

export function bookReducer(
  state: BookState = initialState,
  action: BookActions
): BookState {
  switch (action.type) {
    case BookActionTypes.UPSERT_ONE:
      return bookAdapter.upsertOne(action.payload.book, state);

    case BookActionTypes.DELETE_ONE:
      return bookAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}
