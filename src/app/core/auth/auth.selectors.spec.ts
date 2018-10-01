import { selectAuth, selectIsAuthenticated } from './auth.selectors';

const createAuthState = ({ isAuthenticated = false } = {}) => ({
  auth: {
    isAuthenticated
  }
});

describe('Auth Selectors', () => {
  const state = createAuthState();

  it('selectAuth', () => {
    expect(selectAuth(state)).toBe(state.auth);
  });

  it('selectIsAuthenticated', () => {
    expect(selectIsAuthenticated(state)).toBe(state.auth.isAuthenticated);
  });
});
