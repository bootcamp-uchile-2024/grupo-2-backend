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
    return 'Se indica la creación de una suscripción';
  }

  findAll() { // === Actualizado ===
    return this.suscripciones;
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
/*@ApiProperty()
    public id: number;
    @ApiProperty({default: "SILVER", description:'tipo de suscripcion del usuario', enum:TipoSuscripcion})// === actualizado === 
    public nombre: TipoSuscripcion;
    @ApiProperty({default:12000, description:'precio de la suscripcion'}) // === Actualizado ===
    public precio: number;
    @ApiProperty({default:"5%", description:'descuento de la suscripcion'})// === Actualizado ===
    public descuento: number;
    @ApiProperty({default: "Express",description:'tipo de envio de la suscripcion', enum: TipoEnvio})// === Actualizado ===
    public tipo_envio: TipoEnvio;// o puede ser enum si definimos los tipos
    @ApiProperty({default: "Cerveza1, Cerveza3", description:'lista de cervezas que incluye la suscripcion'}) // === Actualizado ===
    public items_promocion: Cerveza[]; //items que contiene la promoción*/
