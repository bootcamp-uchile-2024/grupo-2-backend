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
import { DireccionesModule } from './direcciones/direcciones.module';
import { CommonMiddleware } from './common/common.middleware';
import { TiposPersonajesModule } from './tipos-personajes/tipos-personajes.module';
import { FormulariosModule } from './formularios/formularios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cerveza } from './cervezas/entities/cerveza.entity';
import { Carrito } from './carrito/entities/carrito.entity';

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
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'clave123',
      database: 'Cervezario',
      entities: [Cerveza, Carrito]
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
