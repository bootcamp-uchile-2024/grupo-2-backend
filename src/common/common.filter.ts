import { ArgumentsHost, Catch, ExceptionFilter, HttpException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CommonFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    
    let message = 'Ha ocurrido un error inesperado.';

    
    const exceptionResponse = exception.getResponse();

    
    if (exception instanceof BadRequestException && typeof exceptionResponse === 'object') {
      const responseObj = exceptionResponse as { message: any[] | string; error: string };

      
      if (Array.isArray(responseObj.message)) {
        message = responseObj.message.join('. ');
      } else if (typeof responseObj.message === 'string') {
        message = responseObj.message;
      }
    } else if (typeof exceptionResponse === 'string') {
      
      message = exceptionResponse;
    } else if (typeof exception.message === 'string') {
      
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      error: message, 
    });

  }
}
