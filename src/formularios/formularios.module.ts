import { Module } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { FormulariosController } from './formularios.controller';

@Module({
  controllers: [FormulariosController],
  providers: [FormulariosService],
})
export class FormulariosModule {}
