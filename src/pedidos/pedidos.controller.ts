import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('pedidos')
@ApiTags('Pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @ApiResponse({ status: 201, description: 'Pedido Creado Exitosamente' })
  @ApiResponse({ status: 400, description: 'No se creó el Pedido' })
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
    return this.pedidosService.findAll(id);
  }

  @ApiResponse({ status: 200, description: 'Pedido encontrado' })
  @ApiResponse({ status: 404, description: 'No se encuentra el pedido' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Pedido editado correctamente' })
  @ApiResponse({ status: 404, description: 'no existe el pedido que se desea actualizar' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @ApiResponse({ status: 200, description: 'Pedido eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'no existe el pedido que se desea actualizar' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
