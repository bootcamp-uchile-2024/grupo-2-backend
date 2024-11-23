import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { estadoPedidos } from 'src/enum/estado-pedidos';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) { }
  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Mapea el DTO a un objeto de tipo Pedido
    const pedido = this.pedidoRepository.create({
      ...createPedidoDto,
      fecha_ingreso: new Date(), // Establece automáticamente la fecha de ingreso
      estado: estadoPedidos.Creado, // Asigna el estado 'creado' por defecto
    });

    // Guarda el pedido en la base de datos
    return this.pedidoRepository.save(pedido);
  }
  async updatePedido(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    // Encuentra el pedido usando findOne con un objeto de opciones
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedido) {
      throw new Error('Pedido no encontrado');
    }

    // Aquí puedes agregar lógica para permitir ediciones solo si el estado es 'creado'

    // Actualiza el pedido con los datos del DTO
    Object.assign(pedido, updatePedidoDto);
    return this.pedidoRepository.save(pedido);
  }


  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find(); // Retorna todos los pedidos
  }

  async findOne(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOne({ where: {id} }); // Encuentra un pedido por su id
  }


  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id); // Elimina un pedido por su id
  }
}
