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

    // Extraer el nombre del módulo o controlador basado en la ruta.
    const context = this.extractContextFromUrl(originalUrl);

    this.loggerService.log(
      `Solicitud entrante: ${method} ${originalUrl} - IP: ${ip} - UserAgent: ${userAgent}`,
      context,
    );

    res.on('finish', () => {
      const statusCode = res.statusCode;
      const contentLength = res.get('Content-Length') || 0;

      this.loggerService.log(
        `Respuesta: ${method} ${originalUrl} - Status: ${statusCode} - ContentLength: ${contentLength}`,
        context,
      );
    });

    next();
  }

  private extractContextFromUrl(url: string): string {
    // Derivar el contexto desde la URL (por ejemplo, el primer segmento después de "/").
    const parts = url.split('/').filter(Boolean);
    return parts.length > 0 ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : 'Application';
  }
}
