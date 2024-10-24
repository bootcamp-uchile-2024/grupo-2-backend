import { Injectable } from '@nestjs/common';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { PersonajeCerveza } from 'src/enum/personajes';
import { Perfile } from './entities/perfile.entity';

@Injectable()

export class PerfilesService {
private perfiles = [];
constructor() {this.perfiles.push({ id: 1, nombre: 'Perfil1', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElBuenaOnda, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
this.perfiles.push({ id: 2, nombre: 'Perfil2', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElOLaChoriza, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });  
this.perfiles.push({ id: 3, nombre: 'Perfil3', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElCabezaDePolera, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
this.perfiles.push({ id: 4, nombre: 'Perfil4', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.NostalgicoA, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
}

  create(createPerfileDto: CreatePerfileDto) {
     return `Se creo el siguientes perfil: ${JSON.stringify(createPerfileDto)}`;
  }

  findAll(): Perfile[] {
    return this.perfiles;
  }

  findOne(id: number): Perfile {
    return this.perfiles.find(perfil => perfil.id == id);
  }

  update(id: number, updatePerfileDto: UpdatePerfileDto): string {
    return `Se edito el siguiente perfil: ${JSON.stringify(updatePerfileDto)}`;
  }

  remove(id: number): string {
    return `This action removes a #${id} perfile`;
  }
}

  