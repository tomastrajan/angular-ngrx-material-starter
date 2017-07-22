import { Action } from '../core.interfaces';

export const initialState = {
  isAuthenticated: false
};

export const AUTH_KEY = 'AUTH';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const login = () => ({ type: AUTH_LOGIN });
export const logout = () => ({ type: AUTH_LOGOUT });

export const selectorAuth = state => state.auth;

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true
      });

    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    default:
      return state;
  }
}
