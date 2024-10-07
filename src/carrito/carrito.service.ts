import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { CreateCervezaDto } from 'src/cervezas/dto/create-cerveza.dto';
import { TipoCerveza } from 'src/enum/tipos-cerveza';

@Injectable()
export class CarritoService {

  private carrito = [];
  constructor() {
    this.carrito.push({ id: 1, item: TipoCerveza.AmberAle, total_a_pagar: 2000, documento: 'Boleta' });
    this.carrito.push({ id: 2, item: TipoCerveza.PaleAle, total_a_pagar: 3000, documento: 'Factura' });
    this.carrito.push({ id: 3, item: TipoCerveza.Pilsner, total_a_pagar: 4000, documento: 'Boleta' });
  }

  create(createCarritoDto: CreateCarritoDto) {
    return `Se creo un carro de compras con lo siguiente: ${JSON.stringify(createCarritoDto)}`;
  }

  findAll() {
    return this.carrito;
  }

  findOne(id: number) {
    return `Entrega un carrito según id`;
  }

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
    return `Se actualizo un carro de compras con lo siguiente: ${JSON.stringify(updateCarritoDto)}`
  }

  remove(id: number) {
    return `Se elimino el carrito con ID ${id}`;
  }
}
