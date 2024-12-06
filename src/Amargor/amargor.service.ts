import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amargor } from './entity/amargor.entity';

@Injectable()
export class AmargorService {
  
  constructor(@InjectRepository(Amargor) private readonly amargorRepository: Repository<Amargor>){}
  
  async findAll(): Promise<Amargor[]> {
    const resultado = await this.amargorRepository.find({
      select:{
        id: true,
        nivel: true,
        descripcion: true
      }
    });
    return resultado;
  }

  async findOne(id: string): Promise<Amargor> {
    const resultado = await this.amargorRepository.findOneBy({id: id});
    return resultado;
  }

}


