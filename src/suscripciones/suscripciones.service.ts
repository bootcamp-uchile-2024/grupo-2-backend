import { Injectable } from '@nestjs/common';
import { CreateSuscripcioneDto } from './dto/create-suscripcione.dto';
import { UpdateSuscripcioneDto } from './dto/update-suscripcione.dto';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { TipoEnvio } from 'src/enum/tipo-envio';

@Injectable()
export class SuscripcionesService {

  // === Actualizado ===
private suscripciones = []
constructor(){
  this.suscripciones.push({id:1, nombre: TipoSuscripcion.SILVER, precio: 12000, descuento: 5, tipo_envio: TipoEnvio.Estandar, items_promocion: ["Cerveza1", "Cerveza3"]})
  this.suscripciones.push({id:2, nombre: TipoSuscripcion.GOLDEN, precio: 15000, descuento: 10, tipo_envio: TipoEnvio.Express, items_promocion: ["Cerveza1"]})
  this.suscripciones.push({id:3, nombre: TipoSuscripcion.PLATINUM, precio: 20000, descuento: 15, tipo_envio: TipoEnvio.Prioritario, items_promocion: ["Cerveza3"]})
}

  create(createSuscripcioneDto: CreateSuscripcioneDto) {
    return `Se creo la siguiente suscripcion:  ${JSON.stringify(createSuscripcioneDto)}`;
  }

  findAll() { // === Actualizado ===
    return this.suscripciones;
  }

  findOne(id: number) {
    return this.suscripciones.find(suscripcion => suscripcion.id === id);
  }

  update(id: number, updateSuscripcioneDto: UpdateSuscripcioneDto) {
     return `Se edito la siguiente suscripcion: ${JSON.stringify(updateSuscripcioneDto)}`;
  }

  remove(id: number) {
    return `Se indica la eliminación de una suscripción`;
  }
}

