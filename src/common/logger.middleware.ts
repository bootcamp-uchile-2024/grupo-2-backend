import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from 'src/common/logger/logger.service';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const ip = req.ip;
    const userAgent = req.get('User-Agent');

    this.loggerService.log(`Solicitud entrante: ${method} ${originalUrl} - IP: ${ip} - UserAgent: ${userAgent}`, 'LoggerMiddleware');

    res.on('finish', () => {
      const statusCode = res.statusCode;
      this.loggerService.log(`Respuesta: ${method} ${originalUrl} - Status: ${statusCode} - ContentLength: ${res.get('Content-Length') || 0}`, 'LoggerMiddleware');
    });

    next();
  }
}
