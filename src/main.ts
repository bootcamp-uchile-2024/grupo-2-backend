import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CommonInterceptor } from './common/common.interceptor';
import { CommonFilter } from './common/common.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService : ConfigService = app.get(ConfigService);
  console.log('Port:', configService.get('PORT'));
  console.log('APP Name:', configService.get('APP_NAME'));
  console.log('App Versio:', configService.get('APP_VERSION'));
  console.log('Reg Level:', configService.get('LOG_LEVEL'));
  console.log('Entorno:', configService.get('AMBIENTE'));
  const name = configService.get<string>('name');
  const description = configService.get<string>('description');
  const version = configService.get<string>('version');
  const author = configService.get<string>('author');
  console.log(author);
  const license = configService.get<string>('licence');


  const config = new DocumentBuilder()
    .setTitle(name + ` - MODULO ${configService.get('AMBIENTE')} `)
    .setDescription(description)
    .setVersion(version)
    .setContact(author,'','')
    .setLicense(license,'')
    .addTag('Cervezario-Nacional-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {yamlDocumentUrl: 'swagger/yaml',});

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new CommonInterceptor())
  app.useGlobalFilters(new CommonFilter())

  await app.listen(process.env.PORT);
}
bootstrap();
