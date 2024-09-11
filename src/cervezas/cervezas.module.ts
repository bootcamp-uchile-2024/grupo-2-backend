import { Module } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CervezasController } from './cervezas.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module'; // Importa el módulo que contiene UsuariosService

@Module({
  controllers: [CervezasController],
  providers: [CervezasService],
  exports: [CervezasService],
  //imports: [UsuariosModule], // Importa el módulo que contiene UsuariosService
})
export class CervezasModule {}









