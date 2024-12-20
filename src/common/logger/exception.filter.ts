import {
    ExceptionFilter as NestExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    LoggerService,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements NestExceptionFilter {
    constructor(private readonly logger: LoggerService) {}
  
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const { method, originalUrl } = request;
      const status = exception.getStatus();
      const message = exception.message;
  
      
      this.logger.error(
        `Error: ${method} ${originalUrl} - Status: ${status} - Message: ${message}`,
        'ExceptionFilter'
      );
  
      
      response.status(status).json({
        statusCode: status,
        message: message,
        error: exception.getResponse(),
      });
    }
  }
  