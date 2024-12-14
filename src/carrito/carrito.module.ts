import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { Pedido_Cerveza } from 'src/pedidos/entities/pedido_cervezas.entity';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService, UsuariosService],
  imports: [TypeOrmModule.forFeature([Carrito, Pedido_Cerveza, Cerveza, Usuario, Direccione, Pedido])]
})
export class CarritoModule {}
