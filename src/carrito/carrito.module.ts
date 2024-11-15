import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { Pedido_Cerveza } from 'src/pedidos/entities/pedido_cervezas.entity';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService],
  imports: [TypeOrmModule.forFeature([Carrito, Pedido_Cerveza, Cerveza])]
})
export class CarritoModule {}
