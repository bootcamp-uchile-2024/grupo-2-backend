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
import { Comunas } from './Comunas/comunas.entity';
import { Region } from './Region/regiones.entity';
import { TipoCerveza } from './tipos_cerveza/entity/tipos-cervezas.entity';
import { Amargor } from './Amargor/entity/amargor.entity';
import { Formato } from './Formato/Formatos.entity';
import { Proveedor } from './Proveedores/entities/proveedores.entity';
import { DireccionesModule } from './Datos_Envio/direcciones.module';
import { Suscripcion } from './suscripciones/entities/suscripcione.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Direccione } from './Datos_Envio/entities/direccione.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AmargorModule } from './Amargor/amargor.module';
import { EstiloModule } from './tipos_cerveza/estilo.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { Categoria } from './Categoria/entity/categoria.entity';
import { ColorModule } from './Color/categoria.module';
import { Color } from './Color/entity/color.entity';
import { Zona } from './Zonas/entity/zona.entity';
import { ZonaModule } from './Zonas/zona.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      load: [
        () => ({
          version: require('../package.json').version,
          name: require('../package.json').name,
          description: require('../package.json').description,
          author: require('../package.json').author,
          license: require('../package.json').license,
        }),
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'clave123',
      database: 'Cervezario',
      entities: [
        Cerveza,
        Categoria,
        Carrito,
        Color,
        Pedido,
        Pedido_Cerveza,
        Comunas,
        Region,
        TipoCerveza,
        Amargor,
        Formato,
        Proveedor,
        Suscripcion,
        Usuario,
        Direccione,
        Zona,
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: './imagenes-cervezas',
      serveRoot: '/imagenes-cervezas',
    }),
    JwtModule.register({
      global: true,
      secret: 'clavesimetrica123',
      signOptions: {
        expiresIn: '1h',
      },
    }),
    EquipoModule,
    UsuariosModule,
    CervezasModule,
    CarritoModule,
    AmargorModule,
    ColorModule,
    CategoriaModule,
    EstiloModule,
    SuscripcionesModule,
    PedidosModule,
    PerfilesModule,
    DireccionesModule,
    ZonaModule,
    TiposPersonajesModule,
    FormulariosModule,
  ],
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
