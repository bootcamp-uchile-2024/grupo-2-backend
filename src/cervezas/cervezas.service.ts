import { Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';

import { IBU } from 'src/enum/amargor';
import { Region } from 'src/enum/regiones';
import { Formato } from 'src/enum/formato';
import { Comuna } from 'src/enum/comunas';
import { TipoCerveza } from 'src/enum/tipos-cerveza';


@Injectable()
export class CervezasService {
  private cervezas = [];

  constructor() {
    this.cervezas.push({ id: 1, nombre: 'Cerveza1', marca: 'Marca1', categoria: TipoCerveza.PaleAle, stock: 10, descripcion: 'Descripción1', precio: 1000, proveedor: 'Proveedor1', region: Region.RM, comuna: Comuna.PUENTE_ALTO,amargor: IBU.Bajo_0_20_IBU, graduacion: '5%', formato: Formato.Lata, imagen: 'imagen1' });
    this.cervezas.push({ id: 2, nombre: 'Torobayo', marca: 'Kunstmann', categoria: TipoCerveza.PaleAle, stock: 20, descripcion: 'Descripción2', precio: 2000, proveedor: 'CCU', region: Region.BI, comuna: Comuna.CONCEPCION,amargor: IBU.Moderado_20_40_IBU, graduacion: '6%', formato: Formato.Botella, imagen: 'imagen2' })
    this.cervezas.push({ id: 3, nombre: 'Cerveza3', marca: 'Marca3', categoria: TipoCerveza.Stout, stock: 30, descripcion: 'Descripción3', precio: 3000, proveedor: 'Proveedor3', region: Region.OH, comuna: Comuna.SAN_VICENTE,amargor: IBU.Alto_60_IBU, graduacion: '7%', formato: Formato.Lata, imagen: 'imagen3' })
    this.cervezas.push({ id: 4, nombre: 'Cerveza4', marca: 'Marca4', categoria: TipoCerveza.Pilsner, stock: 40, descripcion: 'Descripción4', precio: 4000, proveedor: 'Proveedor4', region: Region.MA, comuna: Comuna.TALCA,amargor: IBU.Bajo_0_20_IBU, graduacion: '7%', formato: Formato.Botella, imagen: 'imagen4' })
    this.cervezas.push({ id: 5, nombre: 'Cerveza5', marca: 'Marca5', categoria: TipoCerveza.Porter, stock: 50, descripcion: 'Descripción5', precio: 5000, proveedor: 'Proveedor5', region: Region.AR, comuna: Comuna.AISEN,amargor: IBU.Bajo_0_20_IBU, graduacion: '4%', formato: Formato.Lata, imagen: 'imagen5' });
  }



  create(createCervezaDto: CreateCervezaDto) {
     return `Se creo una Cerveza lo siguiente: ${JSON.stringify(createCervezaDto)}`
  }

  findAll(nombre: string, marca: string, categoria: TipoCerveza, descripcion: string, precio: number, proveedor: string, region: Region, comuna: Comuna, amargor: IBU, graduacion: string, formato: Formato) {
    return this.cervezas;
  }

  findOne(id: number) {
    return this.cervezas.find((cerveza) => cerveza.id == id);
  }

  update(id: number, updateCervezaDto: UpdateCervezaDto) {
     return `Se edito la siguente Cerveza: ${JSON.stringify(updateCervezaDto)}`
  }

  remove(id: number) {
    return `Se indica la eliminaciión de una cerveza`;
  }
}
