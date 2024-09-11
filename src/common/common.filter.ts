import { ArgumentsHost, Catch, ExceptionFilter, HttpException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CommonFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // Inicializa el mensaje de error como un texto genérico
    let message = 'Ha ocurrido un error inesperado.';

    // Obtén el objeto de respuesta de la excepción
    const exceptionResponse = exception.getResponse();

    // Manejo específico para excepciones de tipo BadRequestException (usualmente para validaciones)
    if (exception instanceof BadRequestException && typeof exceptionResponse === 'object') {
      const responseObj = exceptionResponse as { message: any[] | string; error: string };

      // Si los mensajes son un array (errores de validación), únelos en un string
      if (Array.isArray(responseObj.message)) {
        message = responseObj.message.join('. ');
      } else if (typeof responseObj.message === 'string') {
        message = responseObj.message;
      }
    } else if (typeof exceptionResponse === 'string') {
      // Maneja errores donde la respuesta es un string (ej. errores inesperados de formato JSON)
      message = exceptionResponse;
    } else if (typeof exception.message === 'string') {
      // Para otros tipos de errores donde solo el mensaje esté disponible
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      error: message, // Devuelve el mensaje personalizado o formateado
    });

    console.log('------ Filtro de excepciones -------');
    console.log('Status: ' + status);
    console.log('Mensaje de la excepción: ' + message);
  }
}
