import { Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { CervezaArtesanal } from 'src/enum/tipos-cerveza';
import { IBU } from 'src/enum/amargor';
import { Region } from 'src/enum/regiones';
import { Formato } from 'src/enum/formato';


@Injectable()
export class CervezasService {
  create(createCervezaDto: CreateCervezaDto) {
    return 'Se indica la creación de una cerveza';
  }

  findAll(nombre: string, marca: string, categoria: CervezaArtesanal, descripcion: string, precio: number, proveedor: string, region: Region, amargor: IBU, graduacion: string, formato: Formato) {
    return `Se entrega un arreglo de cervezas`;
  }

  findOne(id: number) {
    return `Se entrega una cerveza según id`;
  }

  update(id: number, updateCervezaDto: UpdateCervezaDto) {
    return `Se indica la modificación de una cerveza`;
  }

  remove(id: number) {
    return `Se indica la eliminaciión de una cerveza`;
  }
}
