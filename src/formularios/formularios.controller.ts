import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('formularios')
@ApiTags('Formularios')
export class FormulariosController {
  constructor(private readonly formulariosService: FormulariosService) {}

  
}
