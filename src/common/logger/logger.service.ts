import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    // Define el nivel de log según el entorno
    const logLevel = process.env.NODE_ENV === 'production' ? 'info' : 'verbose';

    // Define el formato de log para consola (texto)
    const logFormat = winston.format.printf(({ timestamp, level, context, message }) => {
      if (level === 'verbose') {
        return `${timestamp} ${level.toUpperCase()} [${context || 'Application'}] VERBOSE: ${message}`;
      }
      return `${timestamp} ${level.toUpperCase()} [${context || 'Application'}] ${message}`;
    });

    // Define el transporte para la consola
    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
          logFormat
        ),
      }),
    ];

    // Agregar transporte para el archivo rotatorio de logs en formato texto (.log)
    transports.push(
      new DailyRotateFile({
        dirname: './logs',
        filename: '%DATE%.log',  // Archivo de texto para logs
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
          winston.format.timestamp(),
          logFormat  // Formato de texto para archivo .log
        ),
      }) as winston.transport
    );

    // Agregar transporte para el archivo rotatorio de logs en formato JSON (.json)
    transports.push(
      new DailyRotateFile({
        dirname: './logs',
        filename: '%DATE%.json',  // Archivo en formato JSON
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()  // Formato JSON para archivo .json
        ),
      }) as winston.transport
    );

    // Crear el logger con los transportes configurados
    this.logger = winston.createLogger({
      level: logLevel, // Nivel de log dinámico
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
