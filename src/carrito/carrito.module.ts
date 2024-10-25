import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService],
  imports: [TypeOrmModule.forFeature([Carrito])]
})
export class CarritoModule {}
