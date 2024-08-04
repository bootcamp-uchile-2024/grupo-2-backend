import { Controller, Get, Param, Res } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { Response } from 'express';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService){}

  // Devolver los datos del equipo (nombre del equipo, las áreas, las personas
  //   que lo conforman y su líder)
  @Get()
  obtenerEquipo(@Res() response: Response) {
    const equipo = this.equipoService.obtenerEquipo();
    response.status(200).send(equipo);
  }

  // Dado el nombre de un área, entregar la información de las personas que
  // pertenecen a esta área e indicar el líder de esa área.
  // Obtener un por subGrupos
  @Get('subgrupo/:subGrupo')
  obtenerPorSubGrupo(@Param('subGrupo') subGrupo: string, @Res() response: Response) {
    const grupo = this.equipoService.obtenerPorSubGrupo(subGrupo);
    if (grupo && grupo.length > 0) {
      response.status(200).send(grupo);
    } else {
      response.status(404).send({ error: 'Eliga subGrupo: uxui, appmobile, frontend, backend' });
    }
  }

  // La lista de todas las áreas con la información indicada anteriormente.?


  // Proporcionar los datos del ecommerce (nombre, descripción breve, tipo
  //   de ecommerce, objetivo general y objetivos específicos).

  
  @Get('/cervezarioNacional')
  obtenerDatosGenerales(@Res() response: Response) {
    const datos = this.equipoService.obtenerDatosGenerales();
    if (datos) {
      response.status(200).send(datos);
    } else {
      response.status(404).send({ error: 'Datos no encontrados' });
    }
    
  }



}

