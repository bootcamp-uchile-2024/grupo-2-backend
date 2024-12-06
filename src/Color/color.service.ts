import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entity/color.entity';

@Injectable()
export class ColorService {
  
  constructor(@InjectRepository(Color) private readonly ColorRepository: Repository<Color>){}
  
  async findAll(): Promise<Color[]> {
    const resultado = await this.ColorRepository.find({
      select:{
        id: true,
        nombre: true
      }
    });
    return resultado;
  }

  async findOne(id: number): Promise<Color> {
    const resultado = await this.ColorRepository.findOneBy({id: id});
    return resultado;
  }

}


