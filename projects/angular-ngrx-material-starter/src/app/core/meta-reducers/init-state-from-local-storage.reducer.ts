import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { AppState } from '../core.state';

export function initStateFromLocalStorage(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
