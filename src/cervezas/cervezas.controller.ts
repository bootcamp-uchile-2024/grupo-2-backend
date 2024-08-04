import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';

@Controller('cervezas')
export class CervezasController {
  constructor(private readonly cervezasService: CervezasService) {}

  @Post()
  create(@Body() createCervezaDto: CreateCervezaDto) {
    return this.cervezasService.create(createCervezaDto);
  }

  @Get()
  findAll() {
    return "Modulo Cervezas";
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
