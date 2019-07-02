import { authLogin, authLogout } from './auth.actions';

describe('Auth Actions', () => {
  it('should create ActionAuthLogin action', () => {
    const action = authLogin();
    expect(action.type).toEqual('[Auth] Login');
  });

  it('should create ActionAuthLogout action', () => {
    const action = authLogout();
    expect(action.type).toEqual('[Auth] Logout');
  });
});
