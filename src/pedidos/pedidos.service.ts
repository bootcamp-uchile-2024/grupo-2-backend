import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { DireccionesService } from 'src/Datos_Envio/direcciones.service';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  private pedidos = [];

  constructor(private readonly direccionesService: DireccionesService) {
    this.initializePedidos();
  }

  private initializePedidos() {
    const direcciones = this.direccionesService.findAll();

    this.pedidos.push({
      id: 1,
      idUsuario: 1,
      items: Cerveza,
      estado: 'creado',
      fecha_ingreso: new Date(),
      direccion_entrega: direcciones.filter(direccion => direccion.idUsuario === 1),
      correo_comprador: '234@234.cl',
      telefono_comprador: '123456789',
      fecha_entrega: new Date()
    });

    this.pedidos.push({
      id: 2,
      idUsuario: 1,
      items: Cerveza,
      estado: 'creado',
      fecha_ingreso: new Date(),
      direccion_entrega: direcciones.filter(direccion => direccion.idUsuario === 1),
      correo_comprador: 'tgr@tre.cl',
      telefono_comprador: '987654321',
      fecha_entrega: new Date()
    });

    this.pedidos.push({
      id: 3,
      idUsuario: 3,
      items: Cerveza,
      estado: 'creado',
      fecha_ingreso: new Date(),
      direccion_entrega: direcciones.filter(direccion => direccion.idUsuario === 3),
      correo_comprador: 'juy@er4.cl',
      telefono_comprador: '123456789',
      fecha_entrega: new Date()
    });

    this.pedidos.push({
      id: 4,
      idUsuario: 2,
      items: Cerveza,
      estado: 'creado',
      fecha_ingreso: new Date(),
      direccion_entrega: direcciones.filter(direccion => direccion.idUsuario === 2),
      correo_comprador: 'mjhy@gtr.cl',
      telefono_comprador: '987654321',
      fecha_entrega: new Date()
    });
  }

  create(createPedidoDto: CreatePedidoDto): CreatePedidoDto {
    return `Se creo de un pedido con los siguientes atributos: ${JSON.stringify(createPedidoDto)}`
  }

  findAll(idUsuario?: number): Usuario[] {
    if (idUsuario) {
      return this.pedidos.filter(pedido => pedido.idUsuario === idUsuario);
    }
    return this.pedidos;
  }

  findOne(id: number): Pedido {
    return this.pedidos.find(pedido => pedido.id === id);
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) : string {
    // Implementa la lógica para actualizar un pedido
    return `Se edito un pedido con los siguientes atributos: ${JSON.stringify(updatePedidoDto)}`
  }

  remove(id: number): string {
    // Implementa la lógica para eliminar un pedido
    return `Se indica la eliminación de un pedido con ID ${id}`;
  }
}
