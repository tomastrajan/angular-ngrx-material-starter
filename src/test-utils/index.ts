import { ROOT_EFFECTS_INIT as INIT } from '@ngrx/effects';

export function resetStateTestMetaReducer(resetTestState) {
  return function(reducer) {
    return function(state, action) {
      if (action.type === INIT) {
        state = resetTestState;
      }
      return reducer(state, action);
    };
  };
}
