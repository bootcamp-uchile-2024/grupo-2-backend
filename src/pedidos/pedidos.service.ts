import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  create(createPedidoDto: CreatePedidoDto) {
    return 'Se indica la creación de un pedido';
  }

  findAll() {
    return `Se entrega una lista de pedidos`;
  }

  findOne(id: number) {
    return `Se entrega un pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `Se indica la modificación de un pedido`;
  }

  remove(id: number) {
    return `Se indica la eliminación un pedido`;
  }
}
