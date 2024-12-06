import { Module } from '@nestjs/common';
import { EstiloService } from './estilo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estiloController } from './estilo.controller';
import { TipoCerveza } from './entity/tipos-cervezas.entity';

@Module({
  controllers: [estiloController],
  providers: [EstiloService],
  imports: [TypeOrmModule.forFeature([TipoCerveza])]
})
export class EstiloModule {}
