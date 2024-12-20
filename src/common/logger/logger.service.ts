import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    const logLevel = process.env.NODE_ENV === 'production' ? 'info' : 'verbose';

    const logFormat = winston.format.printf(({ timestamp, level, context, message }) => {
      return `${timestamp} ${level.toUpperCase()} [${context || 'Application'}] ${message}`;
    });

    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
          logFormat, // Formato para la consola
        ),
      }),
      new DailyRotateFile({
        dirname: './logs',
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
          logFormat, // Formato para los archivos .log
        ),
      }) as winston.transport,
    ];

    this.logger = winston.createLogger({
      level: logLevel,
      transports,
    });
  }

  log(message: string, context?: string) {
    this.logger.info({ message, context });
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error({ message, trace, context });
  }

  warn(message: string, context?: string) {
    this.logger.warn({ message, context });
  }

  debug(message: string, context?: string) {
    this.logger.debug({ message, context });
  }

  verbose(message: string, context?: string) {
    this.logger.verbose({ message, context });
  }
}
