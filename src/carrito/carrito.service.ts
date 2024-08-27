import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Injectable()
export class CarritoService {
  create(createCarritoDto: CreateCarritoDto) {
    return 'Se indica la creación de un nuevo Carrito';
  }

  findAll() {
    return `Se entrega un arreglo de carritos`;
  }

  findOne(id: number) {
    return `Se entrega un carrito según id`;
  }

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
    return `Se indica la modificación de un carrito`;
  }

  remove(id: number) {
    return `Se indica la eliminación de un carrito`;
  }
}
