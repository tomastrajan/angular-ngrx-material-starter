import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectFormState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.form
);
