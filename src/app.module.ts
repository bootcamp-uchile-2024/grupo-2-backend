import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CervezasModule } from './cervezas/cervezas.module';
import { CarritoModule } from './carrito/carrito.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { CommonMiddleware } from './common/common.middleware';
import { TiposPersonajesModule } from './tipos-personajes/tipos-personajes.module';
import { FormulariosModule } from './formularios/formularios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cerveza } from './cervezas/entities/cerveza.entity';
import { Carrito } from './carrito/entities/carrito.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { Pedido_Cerveza } from './pedidos/entities/pedido_cervezas.entity';
import { Comuna } from './Comunas/comunas.entity';
import { Region } from './Region/regiones.entity';
import { TipoCerveza } from './tipos_cerveza/tipos-cervezas.entity';
import { Amargor } from './Amargor/amargor.entity';
import { Formato } from './Formato/Formatos.entity';
import { Proveedor } from './Proveedores/entities/proveedores.entity';
import { DireccionesModule } from './Datos_Envio/direcciones.module';
import { Suscripcion } from './suscripciones/entities/suscripcione.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Direccione } from './Datos_Envio/entities/direccione.entity';

@Module({
  imports: [ConfigModule.forRoot(
    {envFilePath: `.env.${process.env.ARCHIVO_ENV}`,
      load: [() => ({
      version: require('../package.json').version,
      name: require('../package.json').name,
      description: require('../package.json').description,
      author: require('../package.json').author,
      license: require('../package.json').license
      })],
      isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4501,
      username: 'root',
      password: 'CLAVE123',
      database: 'Cervezario',
      entities: [Cerveza, Carrito, Pedido, Pedido_Cerveza, Comuna, Region, TipoCerveza, Amargor, Formato, Proveedor, Suscripcion, Usuario, Direccione]
      })
    ,EquipoModule, UsuariosModule, CervezasModule, CarritoModule, SuscripcionesModule, PedidosModule, PerfilesModule, DireccionesModule, TiposPersonajesModule, FormulariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
  .apply(CommonMiddleware) // MIDDLEWARE A APLICAR
  .forRoutes('*'); 
  }
}
