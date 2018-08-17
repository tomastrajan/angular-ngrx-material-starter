import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { environment } from '@env/environment';

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};

export const metaReducers = (): MetaReducer<State>[] => {
  // tslint:disable-next-line:prefer-const
  let metas = [initStateFromLocalStorage];
  if (!environment.production) {
    metas.unshift(storeFreeze);
    if (!environment.test) {
      metas.unshift(debug);
    }
  }
  return metas;
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export interface State {
  auth: AuthState;
}
