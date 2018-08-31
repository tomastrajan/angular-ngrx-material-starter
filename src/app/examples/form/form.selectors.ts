import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '@app/examples/examples.state';

export const selectForm = createSelector(
  selectExamples,
  (state: ExamplesState) => state.form
);
