import { authReducer, initialState } from './auth.reducer';
import { AuthState } from './auth.models';
import { ActionAuthLogin, ActionAuthLogout } from './auth.actions';

describe('AuthReducer', () => {
  const TEST_INITIAL_STATE: AuthState = {
    isAuthenticated: false
  };

  it('should return default state', () => {
    const action = {} as any;
    const state = authReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set authentication to true on login', () => {
    const action = new ActionAuthLogin();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(true);
  });

  it('should set authentication to false on logout', () => {
    const action = new ActionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(false);
  });
});
