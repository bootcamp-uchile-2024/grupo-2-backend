import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API e-commerce Cervezario Nacional')
    .setDescription('Esta api describe los endpoints del e-commerce Cervezario Nacional')
    .setVersion('1.0.0')
    .addTag('Cervezario-Nacional-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {yamlDocumentUrl: 'swagger/yaml',});

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
