import { Injectable } from '@nestjs/common';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { PersonajeCerveza } from 'src/enum/personajes';

@Injectable()

export class PerfilesService {
private perfiles = [];
constructor() {this.perfiles.push({ id: 1, nombre: 'Perfil1', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElBuenaOnda, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
this.perfiles.push({ id: 2, nombre: 'Perfil2', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElOLaChoriza, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });  
this.perfiles.push({ id: 3, nombre: 'Perfil3', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.ElCabezaDePolera, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
this.perfiles.push({ id: 4, nombre: 'Perfil4', historialPedidos: [], suscripciones: [], recomendaciones: [], personaje: PersonajeCerveza.NostalgicoA, formularioPreferencias: ['Cervezas artesanales'], nivelUsuario: 'Usuario intermedio' });
}

  create(createPerfileDto: CreatePerfileDto) {
    return 'This action adds a new perfile';
  }

  findAll() {
    return `This action returns all perfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfile`;
  }

  update(id: number, updatePerfileDto: UpdatePerfileDto) {
    return `This action updates a #${id} perfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfile`;
  }
}

  /* public id: number;
  
  public nombre: string;

  public pedidos: Pedido[];
 
  public suscripciones: Suscripcione[];

  public recomendaciones: [];

  public personaje: PersonajeCerveza;

  public formularioPreferencias: string[];

  public nivelUsuario: string;*/