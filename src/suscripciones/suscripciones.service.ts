import { Injectable } from '@nestjs/common';
import { CreateSuscripcioneDto } from './dto/create-suscripcione.dto';
import { UpdateSuscripcioneDto } from './dto/update-suscripcione.dto';

@Injectable()
export class SuscripcionesService {
  create(createSuscripcioneDto: CreateSuscripcioneDto) {
    return 'Se indica la creación de una suscripción';
  }

  findAll() {
    return `Se entrega un arreglo de suscripciones`;
  }

  findOne(id: number) {
    return `Se entrega una suscripción`;
  }

  update(id: number, updateSuscripcioneDto: UpdateSuscripcioneDto) {
    return `Se indica la modificación de una suscripción`;
  }

  remove(id: number) {
    return `Se indica la eliminación de una suscripción`;
  }
}
