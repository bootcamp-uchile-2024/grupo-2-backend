import { Controller, Get, Param, Res } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('equipo')
@ApiTags('Grupo 2')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService){}

  
  
  @Get()
  obtenerEquipo(@Res() response: Response) {
    const equipo = this.equipoService.obtenerEquipo();
    response.status(200).send(equipo);
  }

  
  
  
  @Get('subgrupo/:subGrupo')
  obtenerPorSubGrupo(@Param('subGrupo') subGrupo: string, @Res() response: Response) {
    const grupo = this.equipoService.obtenerPorSubGrupo(subGrupo);
    if (grupo && grupo.length > 0) {
      response.status(200).send(grupo);
    } else {
      response.status(404).send({ error: 'Eliga subGrupo: uxui, appmobile, frontend, backend' });
    }
  }

  
  @Get('/lista')
  listaSubgrupos(@Res() response: Response) {
    const lista = this.equipoService.listaSubgrupos();
    if (lista) {
      response.status(200).send(lista);
    } else {
      response.status(404).send({ error: 'No se encontraron subgrupos' });
    }
  }

  
  
  @Get('/cervezarionacional')
  obtenerDatosGenerales(@Res() response: Response) {
    const datos = this.equipoService.obtenerDatosGenerales();
    if (datos) {
      response.status(200).send(datos);
    } else {
      response.status(404).send({ error: 'use /cervezarionacional' });
    }
    
  }



}

