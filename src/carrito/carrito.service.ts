import { Injectable } from '@nestjs/common';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { CarritoMapper } from './mapper/carrito.mapper';
import { PedidoCervezaMapper } from 'src/pedidos/mapper/pedido_cervezas.mapper';
import { Pedido_Cerveza } from 'src/pedidos/entities/pedido_cervezas.entity';

@Injectable()
export class CarritoService {

  constructor(@InjectRepository(Carrito) private readonly repositoryCarrito: Repository<Carrito>,
              @InjectRepository(Pedido_Cerveza) private readonly repositoryPedidoCerveza: Repository<Pedido_Cerveza>) {}
  
  async create(): Promise<number>{
    const carrito = new Carrito();
    carrito.total_a_pagar = 0;
    carrito.pedido_cervezas = [];
    const carrito_guardado = await this.repositoryCarrito.save(carrito);
    return carrito_guardado.id;
  }

  async findOne(id: number) {
    const resultado: Carrito = await this.repositoryCarrito.findOne({
      where: {id: id},
      relations: {pedido_cervezas: true}
    })
    const dto = CarritoMapper.entityToDto(resultado)
    return dto;
    }

  async update(id: number, updateCarritoDto: UpdateCarritoDto) {
    const pedidos = PedidoCervezaMapper.dtoToEntityList(id, updateCarritoDto);
    const pedidos_existentes = await this.repositoryPedidoCerveza.find({
      where: {
        id_pedido: id,
      }})

    if(pedidos_existentes.length > 0){
      for(const pe of pedidos_existentes){
        if (pedidos.indexOf(pe) < 0){
          await this.repositoryPedidoCerveza.delete(pe)
        }else{
          await this.repositoryPedidoCerveza.save(pe)
        }
      }
      for(const pe of pedidos){
        if (pedidos_existentes.indexOf(pe) < 0){
          await this.repositoryPedidoCerveza.save(pe)
        }
      }
    }
    else{
      for(const pe of pedidos){
          await this.repositoryPedidoCerveza.save(pe)
      }
    }

    const update = await this.repositoryCarrito.update(id, {total_a_pagar: updateCarritoDto.total_a_pagar});

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repositoryPedidoCerveza.delete({id_pedido: id})
    await this.repositoryCarrito.delete(id)
    return `Se elimino el carrito con ID ${id}`;
  }
}
