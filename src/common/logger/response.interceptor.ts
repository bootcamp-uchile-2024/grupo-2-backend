import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable, tap } from 'rxjs';
  import { LoggerService } from './logger.service';
  
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    constructor(private readonly logger: LoggerService) {}
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse();
      const { method, originalUrl } = ctx.getRequest();
  
      return next.handle().pipe(
        tap(() => {
          this.logger.log(`Respuesta: ${method} ${originalUrl} - ${response.statusCode}`, 'Interceptor');
        })
      );
    }
  }
  
  