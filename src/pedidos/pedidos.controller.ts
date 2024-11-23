import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PedidoService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pedido } from './entities/pedido.entity';

@Controller('pedidos')
@ApiTags('Pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidoService) {}

  @ApiResponse({ status: 201, description: 'Pedido Creado Exitosamente' })
  @ApiResponse({ status: 404, description: 'No se creó el Pedido' })
  @Post()
  @ApiBody({ type: CreatePedidoDto })
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Pedidos encontrados' })
  @ApiResponse({ status: 404, description: 'No existen Pedidos en la Base de Datos' })
  @ApiQuery({ name: 'idUsuario', required: false, description: 'ID del Usuario' })
  findAll(@Query('idUsuario') idUsuario?: string) {
    const id = idUsuario ? parseInt(idUsuario, 10) : undefined;
    return this.pedidosService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Pedido encontrado' })
  @ApiResponse({ status: 404, description: 'No se encuentra el pedido' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Pedido editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el pedido' })
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    return this.pedidosService.updatePedido(id, updatePedidoDto);
  }

  @ApiResponse({ status: 200, description: 'Pedido eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el pedido' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
