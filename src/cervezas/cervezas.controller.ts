import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Formato } from 'src/enum/formato';
import { Region } from 'src/enum/regiones';
import { CervezaArtesanal } from 'src/enum/tipos-cerveza';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { IBU } from 'src/enum/amargor'; 

@Controller('cervezas')
export class CervezasController {
  
  constructor(private readonly cervezasService: CervezasService) {}

  @Post()
  create(@Body() createCervezaDto: CreateCervezaDto) {
    return this.cervezasService.create(createCervezaDto);
  }

  @Get()
    @ApiQuery({ name: 'nombre', required: false, description: 'Nombre de la cerveza' })
    @ApiQuery({ name: 'marca', required: false, description: 'Marca de la cerveza' })
    @ApiQuery({ name: 'categoria', required: false, description: 'Categoría de la cerveza', enum: CervezaArtesanal })
    @ApiQuery({ name: 'descripcion', required: false, description: 'Descripción de la cerveza' })
    @ApiQuery({ name: 'precio', required: false, description: 'Precio de la cerveza' })
    @ApiQuery({ name: 'proveedor', required: false, description: 'Proveedor de la cerveza' })
    @ApiQuery({ name: 'region', required: false, description: 'Región del proveedor', enum: Region })
    @ApiQuery({ name: 'amargor', required: false, description: 'Nivel de amargor de la cerveza', enum: IBU })
    @ApiQuery({ name: 'graduacion', required: false, description: 'Graduación alcohólica de la cerveza' })
    @ApiQuery({ name: 'formato', required: false, description: 'Formato de la cerveza', enum: Formato })
    findAll(
        @Query('nombre') nombre?: string,
        @Query('marca') marca?: string,
        @Query('categoria') categoria?: CervezaArtesanal,
        @Query('descripcion') descripcion?: string,
        @Query('precio') precio?: number,
        @Query('proveedor') proveedor?: string,
        @Query('region') region?: Region,
        @Query('amargor') amargor?: IBU,
        @Query('graduacion') graduacion?: string,
        @Query('formato') formato?: Formato,
    ) {
        return this.cervezasService.findAll(nombre, marca, categoria, descripcion, precio, proveedor, region, amargor, graduacion, formato);
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cervezasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCervezaDto: UpdateCervezaDto) {
    return this.cervezasService.update(+id, updateCervezaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cervezasService.remove(+id);
  }
}
