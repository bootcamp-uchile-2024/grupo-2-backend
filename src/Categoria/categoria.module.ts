import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria.controller';
import { Categoria } from './entity/categoria.entity';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
  imports: [TypeOrmModule.forFeature([Categoria])]
})
export class CategoriaModule {}
