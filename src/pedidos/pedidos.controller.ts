import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

@ApiResponse({ status: 201, description: 'Pedido Creado Exitosamente' })
@ApiResponse({ status: 404, description: 'No se creo el Pedido' })
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

  @ApiResponse({ status: 200, description: 'Pedidos encontrados' })
  @ApiResponse({ status: 404, description: 'No se encuentra ningun pedido' })
  @Get()
  @ApiQuery({ name: 'usuarioId', required: false, description: 'Id del usuario' })
  findAll(@Query('usuarioId') usuarioId: number) {
    return this.pedidosService.findAll(usuarioId);
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
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @ApiResponse({ status: 200, description: 'Pedido eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el pedido' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
