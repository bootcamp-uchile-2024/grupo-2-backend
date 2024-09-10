import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('carrito')
@ApiTags('Carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @ApiResponse({ status: 201, description: 'Carrito Creado' })
  @ApiResponse({ status: 404, description: 'No se pudo crear el carrito' })
  @Post()
  @ApiBody({ type: CreateCarritoDto })
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritoService.create(createCarritoDto);
  }

  @ApiResponse({ status: 200, description: 'Carritos encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron carritos' })
  @Get()
  findAll() {
    return this.carritoService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Carrito encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el carrito' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Carrito editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el carrito' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritoService.update(+id, updateCarritoDto);
  }

  @ApiResponse({ status: 200, description: 'Carrito eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el carrito' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoService.remove(+id);
  }
}
