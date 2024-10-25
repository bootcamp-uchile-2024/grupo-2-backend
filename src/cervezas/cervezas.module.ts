import { Module } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CervezasController } from './cervezas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cerveza } from './entities/cerveza.entity';

@Module({
  controllers: [CervezasController],
  providers: [CervezasService],
  exports: [CervezasService],
  imports: [TypeOrmModule.forFeature([Cerveza])]
})
export class CervezasModule {}









