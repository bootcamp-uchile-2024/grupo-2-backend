import { Controller, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

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
  @ApiResponse({ status: 200, description: 'Pedidos encontrados' })
  @ApiResponse({ status: 404, description: 'No existen Pedidos en la Base de Datos' })
  @ApiQuery({ name: 'idUsuario', required: false, description: 'ID del Usuario' })
  findAll(@Query('idUsuario') idUsuario?: string) {
    const id = idUsuario ? parseInt(idUsuario, 10) : undefined;
    return this.pedidosService.findAll();
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
