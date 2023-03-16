import { AuthenticatingMiddleware } from './authenticating.middleware';

describe('AuthenticatingMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthenticatingMiddleware()).toBeDefined();
  });
});
