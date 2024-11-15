import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { DireccionesService } from 'src/Datos_Envio/direcciones.service';

@Injectable()
export class PedidosService {
  private pedidos = [];

  constructor(private readonly direccionesService: DireccionesService) {}

  create(createPedidoDto: CreatePedidoDto) {
    return `Se creo de un pedido con los siguientes atributos: ${JSON.stringify(createPedidoDto)}`
  }

  findAll(idUsuario?: number) {
    if (idUsuario) {
      return this.pedidos.filter(pedido => pedido.idUsuario === idUsuario);
    }
    return this.pedidos;
  }

  findOne(id: number) {
    return this.pedidos.find(pedido => pedido.id === id);
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    // Implementa la lógica para actualizar un pedido
    return `Se edito un pedido con los siguientes atributos: ${JSON.stringify(updatePedidoDto)}`
  }

  remove(id: number) {
    // Implementa la lógica para eliminar un pedido
    return `Se indica la eliminación de un pedido con ID ${id}`;
  }
}
