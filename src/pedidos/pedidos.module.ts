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

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Pedido_Cerveza, Cerveza, Direccione, Usuario])],
  controllers: [PedidosController],
  providers: [PedidoService, UsuariosService],
})
export class PedidosModule {}
