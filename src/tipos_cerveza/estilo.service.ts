import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCerveza } from './entity/tipos-cervezas.entity';

@Injectable()
export class EstiloService {
  
  constructor(@InjectRepository(TipoCerveza) private readonly estiloRepository: Repository<TipoCerveza>){}
  
  async findAll(): Promise<TipoCerveza[]> {
    const resultado = await this.estiloRepository.find({
      select:{
        id: true,
        nombre: true,
        categoria_id: true,
        color_id: true,
        descripcion: true
      }
    });
    return resultado;
  }

  async findOne(id: number): Promise<TipoCerveza> {
    const resultado = await this.estiloRepository.findOneBy({id: id});
    return resultado;
  }

}


