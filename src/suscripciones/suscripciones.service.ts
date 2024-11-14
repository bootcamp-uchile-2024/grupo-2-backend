import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Suscripcion } from './entities/suscripcione.entity';
import { Repository } from 'typeorm';
import { SuscripcionMapper } from './mapper/suscripcion.mapper';
import { getSuscripcion } from './dto/getSuscripcion.dto';

@Injectable()
export class SuscripcionesService {
  
  constructor(@InjectRepository(Suscripcion) private readonly suscripcionRepository: Repository<Suscripcion>){}
  
  async findAll(): Promise<getSuscripcion[]> {
    const resultado = await this.suscripcionRepository.find({
      select:{
        nombre: true,
        descripcion: true,
        precio: true,
        descuento: true,
        tipo_envio: true
      }
    });
    console.log(resultado)
    const respuesta = resultado.map((entidad) => SuscripcionMapper.entityToDto(entidad));
    return respuesta;
  }

  async findOne(id: number) {
    const resultado = await this.suscripcionRepository.findOneBy({id: id});
    const respuesta = SuscripcionMapper.entityToDto(resultado);

    return respuesta;
  }

}


