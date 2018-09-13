import { createSelector } from '@ngrx/store';

import { selectExamples, ExamplesState } from '../../examples/examples.state';
import { BookState } from './books.model';
import {
  selectIds,
  selectAll,
  selectEntities,
  selectTotal
} from './books.reducer';

export const selectBooks = createSelector(
  selectExamples,
  (state: ExamplesState) => state.books
);

export const getSelectedBookId = (state: BookState) => state.selectedBookId;
export const selectCurrentBookId = createSelector(
  selectBooks,
  getSelectedBookId
);

export const selectBooksEntities = createSelector(selectBooks, selectEntities);
export const selectAllBooks = createSelector(selectBooks, selectAll);
export const selectCurrentBook = createSelector(
  selectBooksEntities,
  selectCurrentBookId,
  (todoEntities, todoID) => todoEntities[todoID]
);
