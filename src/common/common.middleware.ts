import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CommonMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.baseUrl);
    console.log(req.method);
    console.log(req.body);
    next();
  }
}
