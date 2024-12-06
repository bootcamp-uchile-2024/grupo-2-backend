import { Module } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccione } from './entities/direccione.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Comunas } from 'src/Comunas/comunas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccione, Usuario,Comunas])],
  controllers: [DireccionesController],
  providers: [DireccionesService],
  exports: [DireccionesService],
})
export class DireccionesModule {}
