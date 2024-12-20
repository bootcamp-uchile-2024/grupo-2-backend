import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    // Establece el nivel de log en 'verbose' de forma fija (modo desarrollo)
    const logLevel = (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production') ? 'info' : 'verbose';
    
    // Define el formato de log
    const logFormat = winston.format.printf(({ timestamp, level, context, message }) => {
      return `${timestamp} ${level.toUpperCase()} [${context || 'Application'}] ${message}`;
    });

    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
          logFormat,
        ),
      }),
    ];

    // Si estamos en producción, agregar el archivo rotatorio de logs
    transports.push(
      new DailyRotateFile({
        dirname: './logs', // Directorio donde se guardarán los logs
        filename: '%DATE%.log', // Nombre del archivo de log
        datePattern: 'YYYY-MM-DD', // Rotación diaria
        zippedArchive: true, // Comprime archivos antiguos
        maxSize: '20m', // Tamaño máximo de cada archivo
        maxFiles: '14d', // Mantiene logs por 14 días
      }) as winston.transport // Forzar el tipo a transport
    );

    this.logger = winston.createLogger({
      level: logLevel, // Usamos 'verbose' como nivel fijo
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        logFormat
      ),
      transports,
    });
  }

  log(message: string, context?: string) {
    this.logger.info(message, { context });    
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, { context });
  }

  verbose(message: string, context?: string) {
    this.logger.verbose(message, { context });
  }
}
