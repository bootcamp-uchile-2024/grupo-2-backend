import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Carrito } from 'src/carrito/entities/carrito.entity';
import { CervezasService } from 'src/cervezas/cervezas.service';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Pedido) private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Carrito) private readonly carritoRepository: Repository<Carrito>,
    @InjectRepository(Direccione) private readonly direccionRepository: Repository<Direccione>,
    @InjectRepository(Pedido_Cerveza) private readonly pedidoCervezaRepository: Repository<Pedido_Cerveza>,
    private readonly cervezaService: CervezasService,

  ) { }

  
  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    
    const carrito = await this.carritoRepository.findOneBy({id: createPedidoDto.id_carrito});
    if (!carrito) {
      throw new HttpException('el ID de carrito ingresado no existe', HttpStatus.BAD_REQUEST)
    }else{
      const carrito_en_pedido = await this.pedidoRepository.exists({ where: { id_carrito: createPedidoDto.id_carrito } });
      if(carrito_en_pedido){
        throw new HttpException('ya existe un pedido creado para el ID de carrito ingresado', HttpStatus.BAD_REQUEST)
      }else{
        if(!carrito.rut_comprador){
          
          const usuario = await this.usuarioRepository.findOne({ where: { rut: createPedidoDto.rut_comprador } });
          if (!usuario) {
             throw new HttpException('Se debe crear el usuario antes de crear el pedido', HttpStatus.BAD_REQUEST)
          }else{
            carrito.rut_comprador = createPedidoDto.rut_comprador;
            await this.carritoRepository.save(carrito);
          }
        }else{
          if(carrito.rut_comprador !== createPedidoDto.rut_comprador){
            throw new HttpException('el rut ingresado no coincide con el rut del carrito, para continuar cambie el rut del carrito', HttpStatus.BAD_REQUEST)
          }
        }
      }
    };

    
    const direccion = await this.direccionRepository.findOne({ where: { id: createPedidoDto.id_direccion } });
    if (!direccion) {
      throw new HttpException('Se debe crear la dirección antes de crear el pedido', HttpStatus.BAD_REQUEST)
    }else{
      if(direccion.rut_usuario !== createPedidoDto.rut_comprador){
        throw new HttpException('La dirección ingresada no pertenece al usuario ingresado', HttpStatus.BAD_REQUEST)
      } 
    };

    
    let total_a_pagar: number = 0;
    const pedido_cervezas = await this.pedidoCervezaRepository.find({ where: { id_carrito: createPedidoDto.id_carrito } });
    if (pedido_cervezas.length == 0) {
      throw new HttpException(`El carrito está vacío`, HttpStatus.BAD_REQUEST);
    }else{
      for(const cerveza of pedido_cervezas){
        total_a_pagar += cerveza.cantidad*cerveza.precio_venta;
        await this.cervezaService.actualizarStock(cerveza.id_cerveza, cerveza.cantidad);
      }
    }
    
    
    const pedido = this.pedidoRepository.create({
      rut_comprador: createPedidoDto.rut_comprador,
      total_a_pagar: total_a_pagar,
      id_carrito: createPedidoDto.id_carrito,
      estado: estadoPedidos.Creado, 
      fecha_ingreso: createPedidoDto.fecha_ingreso || new Date(),
      fecha_entrega: createPedidoDto.fecha_entrega,
      direccion_entrega: direccion, 
      pedido_cervezas: pedido_cervezas
    });
    
    const savedPedido = await this.pedidoRepository.save(pedido);
    const pedido_guardado = await this.pedidoRepository.findOne({where: {id_carrito: createPedidoDto.id_carrito}, relations:{direccion_entrega: true, pedido_cervezas: true }})

    return pedido_guardado;
  }

  
  async updatePedido(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedido) {
      throw new NotFoundException('Pedido no encontrado');
    }
  
    
    if (pedido.estado === estadoPedidos.Enviado || pedido.estado === estadoPedidos.Entregado) {
      throw new ForbiddenException('No se pueden modificar pedidos que ya han sido enviados o entregados');
    }
  
    
    if (pedido.estado === estadoPedidos.Creado || pedido.estado === estadoPedidos.Aceptado) {
      if (updatePedidoDto.id_direccion) {
        const nuevaDireccion = await this.direccionRepository.findOne({ where: { id: updatePedidoDto.id_direccion } });
        if (!nuevaDireccion) {
          throw new NotFoundException('Dirección no encontrada');
        }
        pedido.direccion_entrega = nuevaDireccion;
      }
  
    } else {
      throw new ForbiddenException('No se puede modificar un pedido con este estado');
    }
  
    
    return this.pedidoRepository.save(pedido);
  }
  

async existsById(id: number): Promise<boolean> {
  const pedido = await this.pedidoRepository.findOne({ where: { id } });
  return !!pedido;
}

async findAll(filters?: { rut_comprador?: string; id?: number; estado?: string }): Promise<Pedido[]> {
  const where: any = {};

  if (filters?.rut_comprador) {
    where.rut_comprador = filters.rut_comprador;
  }

  if (filters?.estado) {
    where.estado = filters.estado;
  }

  return this.pedidoRepository.find(
    { where: where,
      relations: {
        pedido_cervezas: true, 
        direccion_entrega: true
      }
   });
}

  
  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id: id },
      relations: {
        pedido_cervezas: true, 
        direccion_entrega: true
      }
    });
    return pedido
  }

  
  async remove(id: number): Promise<string> {
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (!pedido) {
      throw new NotFoundException(`No se encontró el pedido con ID ${id}.`);
    }

    try {
      if(pedido.estado == estadoPedidos.Pagado || pedido.estado == estadoPedidos.Entregado || pedido.estado == estadoPedidos.Enviado){
        throw new BadRequestException(`No se puede eliminar un pedido que ya fue pagado, enviado o entregado`);
      }else{
        await this.pedidoRepository.delete(id);
        return 'pedido eliminado'
      };
    } catch (error) {
      console.error('Error al eliminar el pedido:', error);
      throw new InternalServerErrorException('Ocurrió un error al eliminar el pedido.');
    }
  }
}