import { createSelector } from '@ngrx/store';

import { selectExamples, ExamplesState } from '../../examples/examples.state';

import { BookState } from './books.model';
import { bookAdapter } from './books.reducer';

const { selectEntities, selectAll } = bookAdapter.getSelectors();
const getSelectedBookId = (state: BookState) => state.selectedBookId;

export const selectBooks = createSelector(
  selectExamples,
  (state: ExamplesState) => state.books
);

export const selectSelectedBookId = createSelector(
  selectBooks,
  getSelectedBookId
);

export const selectBooksEntities = createSelector(selectBooks, selectEntities);
export const selectAllBooks = createSelector(selectBooks, selectAll);
export const selectSelectedBook = createSelector(
  selectBooksEntities,
  selectSelectedBookId,
  (bookEntities, selectedBookId) => bookEntities[selectedBookId]
);
