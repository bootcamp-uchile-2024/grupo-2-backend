import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { PedidoService } from './pedidos.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Pedido_Cerveza } from './entities/pedido_cervezas.entity';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Carrito } from 'src/carrito/entities/carrito.entity';
import { CervezasService } from 'src/cervezas/cervezas.service';
import { TipoCerveza } from 'src/tipos_cerveza/entity/tipos-cervezas.entity';
import { Amargor } from 'src/Amargor/entity/amargor.entity';
import { Proveedor } from 'src/Proveedores/entities/proveedores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Pedido_Cerveza, Cerveza, Direccione, Usuario, Carrito, TipoCerveza, Amargor, Proveedor])],
  controllers: [PedidosController],
  providers: [PedidoService, UsuariosService, CervezasService],
})
export class PedidosModule {}
