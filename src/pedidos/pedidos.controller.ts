import { Controller, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { BadRequestException } from '@nestjs/common';



@Controller('pedidos')
@ApiTags('Pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidoService,
    private readonly usuariosService: UsuariosService,
  ) {}
//=======================================================================================================
  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    try {
      return await this.pedidosService.create(createPedidoDto);
    } catch (error) {
      throw new Error(`Error al crear el pedido: ${error.message}`);
    }
  }
  //=======================================================================================================
  @Get()
  @ApiQuery({ name: 'rut_comprador', required: false, type: String, description: 'RUT del comprador' })
  @ApiQuery({ name: 'id', required: false, type: Number, description: 'ID del pedido' })
  @ApiQuery({
    name: 'estado',
    required: false,
    enum: ['Creado', 'Enviado', 'Aceptado', 'Entregado', 'Pagado'],
    description: 'Estado del pedido (valores posibles: Creado, Enviado, Aceptado, Entregado, Pagado)',
  })
  async getAllPedidos(
    @Query('rut_comprador') rut_comprador?: string,
    @Query('id') id?: number,
    @Query('estado') estado?: string,
  ): Promise<Pedido[]> {
    // Validar la existencia del rut_comprador en la tabla usuario
    if (rut_comprador) {
      const usuarioExiste = await this.usuariosService.existsByRut(rut_comprador);
      if (!usuarioExiste) {
        throw new HttpException(
          `El RUT proporcionado (${rut_comprador}) no existe en la tabla de usuarios.`,
          HttpStatus.FORBIDDEN,
        );
      }
    }

    // Validar la existencia del id en la tabla pedido
    if (id) {
      const pedidoExiste = await this.pedidosService.existsById(id);
      if (!pedidoExiste) {
        throw new HttpException(
          `El ID proporcionado (${id}) no existe en la tabla de pedidos.`,
          HttpStatus.FORBIDDEN,
        );
      }
    }

    // Construir los filtros para la consulta
    const filters = {
      rut_comprador,
      id: id ? Number(id) : undefined,
      estado,
    };

    return this.pedidosService.findAll(filters);
  }

  //=======================================================================================================
  @ApiResponse({ status: 200, description: 'Pedido encontrado' })
  @ApiResponse({ status: 404, description: 'No se encuentra el pedido' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }
//=======================================================================================================
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Pedido editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el pedido' })
  async update(
    @Param('id') id: number,
    @Body() updatePedidoDto: UpdatePedidoDto
  ): Promise<Pedido> {
    return await this.pedidosService.updatePedido(id, updatePedidoDto);
  }
//=======================================================================================================
@ApiResponse({ status: 200, description: 'Pedido eliminado correctamente' })
@ApiResponse({ status: 404, description: 'Pedido no encontrado' })
@ApiResponse({ status: 500, description: 'Error interno del servidor' })
@Delete(':id')
async remove(@Param('id') id: string): Promise<{ message: string }> {
  const pedidoId = parseInt(id, 10);

  if (isNaN(pedidoId)) {
    throw new BadRequestException('El ID proporcionado no es válido.');
  }

  await this.pedidosService.remove(pedidoId);

  return { message: 'Pedido eliminado correctamente' };
}
}
