import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Injectable()
export class CarritoService {
  create(createCarritoDto: CreateCarritoDto) {
     return `Se creo un carro de compras con lo siguiente: ${JSON.stringify(createCarritoDto)}`;
  }

  findAll() {
    return `Muestra todos los carritos de compras`;
  }

  findOne(id: number) {
    return `Entrega un carrito según id`;
  }

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
     return `Se actualizo un carro de compras con lo siguiente: ${JSON.stringify(updateCarritoDto)}`
  }

  remove(id: number) {
    return `Se Elimino el carrito con ID ${id}`;
  }
}
