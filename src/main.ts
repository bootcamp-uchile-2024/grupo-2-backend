import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CommonInterceptor } from './common/common.interceptor';
import { CommonFilter } from './common/common.filter';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from 'src/common/logger/exception.filter';  
import { ResponseInterceptor } from 'src/common/logger/response.interceptor';
import { LoggerService } from 'src/common/logger/logger.service';  


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  
  const name = configService.get<string>('name');
  const description = configService.get<string>('description');
  const version = configService.get<string>('version');
  const author = configService.get<string>('author');
  
  const license = configService.get<string>('license');
  

  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle(name + ` - MODULO ${configService.get('AMBIENTE')} `)
    .setDescription(description)
    .addBearerAuth()
    .setVersion(version)
    .setContact(author, '-', '-')
    .setLicense(license, '-')
    .addTag('Cervezario-Nacional-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    yamlDocumentUrl: 'swagger/yaml',
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new CommonInterceptor());
  app.useGlobalInterceptors(new ResponseInterceptor(new LoggerService())); 
  app.useGlobalFilters(new HttpExceptionFilter(new LoggerService()));
  app.useGlobalFilters(new CommonFilter());

  await app.listen(process.env.NESTJS_PORT ?? 4500);
}
bootstrap();
