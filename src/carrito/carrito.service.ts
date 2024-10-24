import { Inject, Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';

@Injectable()
export class CarritoService {

  private carrito = [];
  constructor(@InjectRepository(Carrito) private readonly repositoryCarrito: Repository<Carrito>) {}
  
  create(createCarritoDto: CreateCarritoDto) {
    return `Se creo un carro de compras con lo siguiente: ${JSON.stringify(createCarritoDto)}`;
  }

  async findAll() {
    const resultado: Carrito[] = await this.repositoryCarrito.find({
      relations:{
        pedido: true
      }
    })
    return resultado;
  }

  //async findOne(id: number) {
    //const resultado: Carrito[] = await this.repositoryCarrito.findBy(where: id)
    //return resultado;
  //}

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
    return `Se actualizo un carro de compras con lo siguiente: ${JSON.stringify(updateCarritoDto)}`
  }

  remove(id: number) {
    return `Se elimino el carrito con ID ${id}`;
  }
}
