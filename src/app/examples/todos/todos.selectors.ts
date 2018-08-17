import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectTodos = createSelector(
  selectExamples,
  (state: ExamplesState) => state.todos
);
