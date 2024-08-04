import { Injectable } from '@nestjs/common';
import { CreateSuscripcioneDto } from './dto/create-suscripcione.dto';
import { UpdateSuscripcioneDto } from './dto/update-suscripcione.dto';

@Injectable()
export class SuscripcionesService {
  create(createSuscripcioneDto: CreateSuscripcioneDto) {
    return 'This action adds a new suscripcione';
  }

  findAll() {
    return `modulo Suscripciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suscripcione`;
  }

  update(id: number, updateSuscripcioneDto: UpdateSuscripcioneDto) {
    return `This action updates a #${id} suscripcione`;
  }

  remove(id: number) {
    return `This action removes a #${id} suscripcione`;
  }
}
