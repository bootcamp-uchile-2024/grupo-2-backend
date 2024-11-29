import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Pedido_Cerveza } from './entities/pedido_cervezas.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { estadoPedidos } from 'src/enum/estado-pedidos';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Cerveza)
    private readonly cervezaRepository: Repository<Cerveza>,
    @InjectRepository(Direccione)
    private readonly direccionRepository: Repository<Direccione>,
    @InjectRepository(Pedido_Cerveza)
    private readonly pedidoCervezaRepository: Repository<Pedido_Cerveza>,
  ) { }


  //=======================================================================================================
  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Verificar si el usuario existe por su rut_comprador
    const usuario = await this.usuarioRepository.findOne({ where: { rut: createPedidoDto.rut_comprador } });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    console.log("======1=====");
    // Verificar la dirección de entrega
    const direccion = await this.direccionRepository.findOne({ where: { id: createPedidoDto.id_direccion } });

    if (!direccion) {
      throw new Error('Dirección no encontrada');
    }
    console.log("======2=====");
    

    // Si el usuario no está suscrito, solicitamos el correo y teléfono
    let datosEnvio;
    if (usuario.tipo_suscripcion === TipoSuscripcion.SIN_SUSCRIPCION) {
      if (!createPedidoDto.correo_comprador || !createPedidoDto.telefono_comprador) {
        throw new BadRequestException('Correo y teléfono son requeridos para usuarios no suscritos');
      }
      // Crear un nuevo registro de datos de envío
      datosEnvio = this.direccionRepository.create({
        calle: direccion.calle,
        numero: direccion.numero,
        departamento: direccion.departamento,
        id_comuna: direccion.id_comuna,
        codigo_Postal: direccion.codigo_Postal,
        rut_usuario: createPedidoDto.rut_comprador,
        telefono: createPedidoDto.telefono_comprador,
        correo_electronico: createPedidoDto.correo_comprador,
      });
      await this.direccionRepository.save(datosEnvio);
    }
    console.log("======3=====");
    // Obtener los detalles de las cervezas usando los ids proporcionados
    const cervezas = await Promise.all(
      createPedidoDto.cervezas.map(async (item) => {
        const cerveza = await this.cervezaRepository.findOne({ where: { id: item.id_cerveza } });
        if (!cerveza) {
          throw new Error(`Cerveza con id ${item.id_cerveza} no encontrada`);
        }
        return { cerveza, cantidad: item.cantidad };
      }),
    );
    console.log("======4=====");
    // Crear el nuevo pedido sin los campos de correo o teléfono, ya que son parte de Datos_Envio
    const pedido = this.pedidoRepository.create({
      rut_comprador: createPedidoDto.rut_comprador,
      estado: estadoPedidos.Creado, // Estado inicial 'Creado'
      fecha_ingreso: createPedidoDto.fecha_ingreso || new Date(),
      fecha_entrega: createPedidoDto.fecha_entrega,
      direccion_entrega: direccion, // Solo asociamos la dirección
    });
    console.log("======5=====");

    // Guardar el pedido en la base de datos
    const savedPedido = await this.pedidoRepository.save(pedido);
    console.log("======6=====");

    // Crear los registros en Pedido_Cerveza para cada cerveza
    await Promise.all(
      cervezas.map(async ({ cerveza, cantidad }) => {
        const pedidoCerveza = this.pedidoCervezaRepository.create({
          id_pedido: savedPedido.id, // Usar el id del pedido como id_carrito
          id_cerveza: cerveza.id,
          cantidad,
        });
        await this.pedidoCervezaRepository.save(pedidoCerveza);
      }),
    );
    console.log("======7=====");
    return savedPedido;
  }
//=======================================================================================================
  // Método para actualizar un pedido
  async updatePedido(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    // Buscar el pedido por ID
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedido) {
      throw new NotFoundException('Pedido no encontrado');
    }
  
    // Verificar si el estado del pedido permite la modificación
    if (pedido.estado === estadoPedidos.Enviado || pedido.estado === estadoPedidos.Entregado) {
      throw new ForbiddenException('No se pueden modificar pedidos que ya han sido enviados o entregados');
    }
  
    // Si el estado es "Pagado", no permitir la modificación de cervezas
    if (pedido.estado === estadoPedidos.Pagado && updatePedidoDto.cervezas) {
      throw new ForbiddenException('No se pueden modificar las cervezas de un pedido pagado');
    }
  
    // Si el estado es "Creado" o "Aceptado", se pueden modificar los campos permitidos
    if (pedido.estado === estadoPedidos.Creado || pedido.estado === estadoPedidos.Aceptado) {
      if (updatePedidoDto.id_direccion) {
        const nuevaDireccion = await this.direccionRepository.findOne({ where: { id: updatePedidoDto.id_direccion } });
        if (!nuevaDireccion) {
          throw new NotFoundException('Dirección no encontrada');
        }
        pedido.direccion_entrega = nuevaDireccion;
      }
  
      if (updatePedidoDto.fecha_entrega) {
        pedido.fecha_entrega = updatePedidoDto.fecha_entrega;
      }
  
      if (updatePedidoDto.cervezas) {
        // Eliminar cervezas existentes asociadas al pedido
        await this.pedidoCervezaRepository.delete({ id_pedido: pedido.id });
  
        // Insertar las nuevas cervezas
        await Promise.all(
          updatePedidoDto.cervezas.map(async (item) => {
            const cerveza = await this.cervezaRepository.findOne({ where: { id: item.id_cerveza } });
            if (!cerveza) {
              throw new NotFoundException(`Cerveza con id ${item.id_cerveza} no encontrada`);
            }
            const pedidoCerveza = this.pedidoCervezaRepository.create({
              id_pedido: pedido.id,
              id_cerveza: cerveza.id,
              cantidad: item.cantidad,
            });
            await this.pedidoCervezaRepository.save(pedidoCerveza);
          }),
        );
      }
  
      if (updatePedidoDto.correo_comprador) {
        // Aquí deberías actualizar el correo en el objeto de datos de envío, si es necesario
      }
  
      if (updatePedidoDto.telefono_comprador) {
        // Aquí deberías actualizar el teléfono en el objeto de datos de envío, si es necesario
      }
    } else {
      throw new ForbiddenException('No se puede modificar un pedido con este estado');
    }
  
    // Guardar el pedido actualizado
    return this.pedidoRepository.save(pedido);
  }
  
//=======================================================================================================
async existsById(id: number): Promise<boolean> {
  const pedido = await this.pedidoRepository.findOne({ where: { id } });
  return !!pedido;
}

async findAll(filters?: { rut_comprador?: string; id?: number; estado?: string }): Promise<Pedido[]> {
  const where: any = {};

  if (filters?.rut_comprador) {
    where.rut_comprador = filters.rut_comprador;
  }

  if (filters?.id) {
    where.id = filters.id;
  }

  if (filters?.estado) {
    where.estado = filters.estado;
  }

  return this.pedidoRepository.find({ where });
}
//=======================================================================================================
  // Método para obtener un pedido específico
  async findOne(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOne({
      where: { id },
    });
  }
//=======================================================================================================
  // Método para eliminar un pedido
  async remove(id: number): Promise<void> {
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
  
    if (!pedido) {
      throw new NotFoundException(`No se encontró el pedido con ID ${id}.`);
    }
  
    try {
      await this.pedidoRepository.delete(id);
    } catch (error) {
      console.error('Error al eliminar el pedido:', error);
      throw new InternalServerErrorException('Ocurrió un error al eliminar el pedido.');
    }
  }
}