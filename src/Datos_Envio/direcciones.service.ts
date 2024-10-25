import { Injectable } from '@nestjs/common';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';


@Injectable()
export class DireccionesService {
  private direcciones = [];
  constructor() {}

  create(createDireccioneDto: CreateDireccioneDto) {
     return `Se creo la siguiente direccion: ${JSON.stringify(createDireccioneDto)}`
  }

  findAll() {
    return this.direcciones;
  }

  findOne(id: number) {
    return this.direcciones.find(direccion => direccion.idUsuario == id);
  }

  update(id: number, updateDireccioneDto: UpdateDireccioneDto) {
    return `Se edito la siguiente direccion: ${JSON.stringify(updateDireccioneDto)}`;
  }

  remove(id: number) {
      return `Se elimno la direccion con Id #${id}`;
  }
  }