import { createEntityAdapter } from '@ngrx/entity';

import { Book, BookState } from './books.model';
import { BookActionTypes, BookActions } from './books.actions';

const bookAdapter = createEntityAdapter<Book>();

export const initialState: BookState = bookAdapter.getInitialState({
  selectedBookId: null,
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
    case BookActionTypes.ADD_ONE:
      return bookAdapter.addOne(action.book, state);
    case BookActionTypes.UPDATE_ONE:
      return bookAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );
    case BookActionTypes.DELETE_ONE:
      return bookAdapter.removeOne(action.id, state);
    case BookActionTypes.SELECT_ONE:
      return { ...state, selectedBookId: action.id };
    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = bookAdapter.getSelectors();
