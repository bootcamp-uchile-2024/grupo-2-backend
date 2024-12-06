import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entity/categoria.entity';

@Injectable()
export class CategoriaService {
  
  constructor(@InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>){}
  
  async findAll(): Promise<Categoria[]> {
    const resultado = await this.categoriaRepository.find({
      select:{
        id: true,
        nombre: true
      }
    });
    return resultado;
  }

  async findOne(id: number): Promise<Categoria> {
    const resultado = await this.categoriaRepository.findOneBy({id: id});
    return resultado;
  }

}


