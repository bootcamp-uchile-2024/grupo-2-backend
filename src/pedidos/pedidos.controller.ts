import { Controller, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { estadoPedidos } from 'src/enum/estado-pedidos';

@Controller('pedidos')
@ApiTags('Pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidoService) {}
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
  @ApiQuery({ name: 'estado', required: false, type: String, description: 'Estado del pedido', enum: estadoPedidos })
  async getAllPedidos(
    @Query('rut_comprador') rut_comprador?: string,
    @Query('id') id?: number,
    @Query('estado') estado?: string,
  ): Promise<Pedido[]> {
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
  @ApiResponse({ status: 404, description: 'No se puede eliminar el pedido' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
