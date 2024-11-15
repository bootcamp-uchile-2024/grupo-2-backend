import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Suscripcion } from 'src/suscripciones/entities/suscripcione.entity';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
  imports: [TypeOrmModule.forFeature([Usuario, Suscripcion, Direccione, Pedido])],
})
export class UsuariosModule {}
