import { Action } from '@ngrx/store';

export const AUTH_KEY = 'AUTH';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout'
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.LOGIN;
}

export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = ActionAuthLogin | ActionAuthLogout;

export const initialState = {
  isAuthenticated: false
};

export const selectorAuth = state => state.auth;

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true
      });

    case AuthActionTypes.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    default:
      return state;
  }
}
