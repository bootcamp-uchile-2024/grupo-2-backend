import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CervezasModule } from './cervezas/cervezas.module';
import { CarritoModule } from './carrito/carrito.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { DireccionesModule } from './direcciones/direcciones.module';

@Module({
  imports: [EquipoModule, UsuariosModule, CervezasModule, CarritoModule, SuscripcionesModule, PedidosModule, PerfilesModule, DireccionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
