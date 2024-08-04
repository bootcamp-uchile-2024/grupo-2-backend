import { Module } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CervezasController } from './cervezas.controller';

@Module({
  controllers: [CervezasController],
  providers: [CervezasService],
})
export class CervezasModule {}
