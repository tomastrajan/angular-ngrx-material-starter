import { selectAuth } from '@app/core/auth/auth.selectors';
describe('Auth Selectors', () => {
  describe('selectAuth', () => {
    it('should get authenticated state', () => {
      const isAuthenticated = true;
      expect(selectAuth.projector(isAuthenticated)).toEqual(isAuthenticated);
    });
  });
});
