import { Injectable } from '@nestjs/common';
import { CreateTiposPersonajeDto } from './dto/create-tipos-personaje.dto';
import { UpdateTiposPersonajeDto } from './dto/update-tipos-personaje.dto';

@Injectable()
export class TiposPersonajesService {
  create(createTiposPersonajeDto: CreateTiposPersonajeDto) {
    return 'This action adds a new tiposPersonaje';
  }

  findAll() {
    return `This action returns all tiposPersonajes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposPersonaje`;
  }

  update(id: number, updateTiposPersonajeDto: UpdateTiposPersonajeDto) {
    return `This action updates a #${id} tiposPersonaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposPersonaje`;
  }
}
