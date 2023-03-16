import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthenticatingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('mi: Authenticating the user');
    next();
  }
}
