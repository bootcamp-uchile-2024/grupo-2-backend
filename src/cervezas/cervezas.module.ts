import { Module } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CervezasController } from './cervezas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cerveza } from './entities/cerveza.entity';
import { TipoCerveza } from 'src/tipos_cerveza/tipos-cervezas.entity';
import { Amargor } from 'src/Amargor/amargor.entity';
import { Proveedor } from 'src/Proveedores/entities/proveedores.entity';

@Module({
  controllers: [CervezasController],
  providers: [CervezasService],
  exports: [CervezasService],
  imports: [TypeOrmModule.forFeature([Cerveza, TipoCerveza, Amargor, Proveedor])]
})
export class CervezasModule {}









