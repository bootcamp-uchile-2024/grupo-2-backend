import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Formato } from 'src/enum/formato';
import { Region } from 'src/enum/regiones';
import { TipoCerveza } from 'src/enum/tipos-cerveza';
import { IBU } from 'src/enum/amargor';
import { Comuna } from 'src/enum/comunas';
import { response, Response } from 'express';

@Controller('cervezas')
export class CervezasController {

  constructor(private readonly cervezasService: CervezasService) { }

  
  @Post()
  @ApiResponse({ status: 201, description: 'Cerveza creada exitosamente' })
  @ApiResponse({ status: 404, description: 'Error al crear la cerveza' })
  create(@Body() createCervezaDto: CreateCervezaDto, @Res() response: Response) {
    const creacioCerveza = this.cervezasService.create(createCervezaDto);
    if (creacioCerveza) {
      response.status(201).send(creacioCerveza);
    } else {
      response.status(400).send({ error: 'Error al crear la cerveza' })
    }
  }
  
  @Get()
  @ApiResponse({ status: 200, description: 'Cervezas encontradas' })
  @ApiResponse({ status: 404, description: 'No existen Cervezas en la Base de Datos' })
  @ApiQuery({ name: 'nombre', required: false, description: 'Nombre de la cerveza' })
  @ApiQuery({ name: 'marca', required: false, description: 'Marca de la cerveza' })
  @ApiQuery({ name: 'categoria', required: false, description: 'Categoría de la cerveza', enum: TipoCerveza })
  @ApiQuery({ name: 'descripcion', required: false, description: 'Descripción de la cerveza' })
  @ApiQuery({ name: 'precio', required: false, description: 'Precio de la cerveza' })
  @ApiQuery({ name: 'proveedor', required: false, description: 'Proveedor de la cerveza' })
  @ApiQuery({ name: 'region', required: false, description: 'Región del proveedor', enum: Region })
  @ApiQuery({ name: 'comuna', required: false, description: 'Comuna del proveedor', enum: Comuna })
  @ApiQuery({ name: 'amargor', required: false, description: 'Nivel de amargor de la cerveza', enum: IBU })
  @ApiQuery({ name: 'graduacion', required: false, description: 'Graduación alcohólica de la cerveza' })
  @ApiQuery({ name: 'formato', required: false, description: 'Formato de la cerveza', enum: Formato })
  findAll(@Res() response: Response,
    @Query('nombre') nombre?: string,
    @Query('marca') marca?: string,
    @Query('categoria') categoria?: TipoCerveza,
    @Query('descripcion') descripcion?: string,
    @Query('precio') precio?: number,
    @Query('proveedor') proveedor?: string,
    @Query('region') region?: Region,
    @Query('comuna') comuna?: Comuna,
    @Query('amargor') amargor?: IBU,
    @Query('graduacion') graduacion?: string,
    @Query('formato') formato?: Formato) {
    const obtenerCervezas = this.cervezasService.findAll(nombre, marca, categoria, descripcion, precio, proveedor, region, comuna, amargor, graduacion, formato);
    if (obtenerCervezas.length == 0) {
      response.status(404).send({ error: 'No existen Cervezas en la Base de Datos no encontradas' });
    } else {
      response.status(200).send(obtenerCervezas);
    }
  }
  
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Cerveza encontrada' })
  @ApiResponse({ status: 404, description: 'Cerveza no encontrada' })
  findOne(@Param('id') id: string, @Res() response: Response) {
    const obtenerXId = this.cervezasService.findOne(+id);
    if (obtenerXId) {
      response.status(200).send(obtenerXId);
    } else {
      response.status(404).send({ error: 'Cerveza no encontrada' });
    }
  }
  
  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Informacion actualizada de forma exitosa' })
  @ApiResponse({ status: 404, description: 'Error al actualizar informacion' })
  update(@Param('id') id: string, @Body() updateCervezaDto: UpdateCervezaDto, @Res() response: Response) {
    const actCerveza = this.cervezasService.update(+id, updateCervezaDto);
    if (actCerveza) {
      response.status(201).send(actCerveza);
    } else {
      response.status(404).send({ error: 'Error al actualizar informacion' });
  }
}
@Delete(':id')
@ApiResponse({ status: 200, description: 'Cerveza eliminada exitosamente' })
@ApiResponse({ status: 404, description: 'Error al eliminar la cerveza' })
remove(@Param('id') id: string, @Res() response: Response) {
  const elimCerveza = this.cervezasService.remove(+id);
  if (elimCerveza) {
    response.status(200).send({ mensaje: 'Cerveza eliminada exitosamente' });
  } else {
    response.status(404).send({ error: 'Error al eliminar la cerveza' });
  }
}
}
