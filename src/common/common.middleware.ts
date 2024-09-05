import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CommonMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.body.nombre = req.body.nombre.toLowerCase();
    req.body.correo = req.body.correo.toLowerCase();
    next();
  }
}
