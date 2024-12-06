import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zona } from './entity/zona.entity';

@Injectable()
export class ZonaService {
  
  constructor(@InjectRepository(Zona) private readonly ZonaRepository: Repository<Zona>){}
  
  async findAll(): Promise<Zona[]> {
    const resultado = await this.ZonaRepository.find({
      select:{
        id: true,
        nombre: true
      }
    });
    return resultado;
  }

  async findOne(id: number): Promise<Zona> {
    const resultado = await this.ZonaRepository.findOneBy({id: id});
    return resultado;
  }

}


