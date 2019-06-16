import { selectAuth, selectIsAuthenticated } from './auth.selectors';

describe('Auth Selectors', () => {
  it('selectAuth', () => {
    const state = createAuthState();
    expect(selectAuth(state)).toBe(state.auth);
  });

  it('selectIsAuthenticated', () => {
    const state = createAuthState();
    expect(selectIsAuthenticated(state)).toBe(false);
  });
});

function createAuthState() {
  return {
    auth: {
      isAuthenticated: false
    },
    settings: {} as any,
    router: {} as any
  };
}
