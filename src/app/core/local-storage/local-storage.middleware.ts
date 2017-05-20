import {Dispatcher} from '@ngrx/store';

import { LocalStorageService } from './local-storage.service';

export function localStorageInitStateMiddleware(reducer: any) {
  return function (state, action: any) {
    if (action.type === Dispatcher.INIT) {
      state = LocalStorageService.loadInitialState();
    }
    return reducer(state, action);
  };
}

