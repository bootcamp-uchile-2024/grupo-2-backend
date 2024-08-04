import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipo/equipo.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [EquipoModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
