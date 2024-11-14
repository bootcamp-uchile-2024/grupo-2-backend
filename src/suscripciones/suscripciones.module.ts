import { Module } from '@nestjs/common';
import { SuscripcionesService } from './suscripciones.service';
import { SuscripcionesController } from './suscripciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suscripcion } from './entities/suscripcione.entity';

@Module({
  controllers: [SuscripcionesController],
  providers: [SuscripcionesService],
  imports: [TypeOrmModule.forFeature([Suscripcion])]
})
export class SuscripcionesModule {}
