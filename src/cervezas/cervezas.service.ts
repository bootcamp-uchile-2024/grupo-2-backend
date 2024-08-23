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
    return 'This action adds a new cerveza';
  }

  findAll(nombre: string, marca: string, categoria: CervezaArtesanal, descripcion: string, precio: number, proveedor: string, region: Region, amargor: IBU, graduacion: string, formato: Formato) {
    return `Modulo cervezas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cerveza`;
  }

  update(id: number, updateCervezaDto: UpdateCervezaDto) {
    return `This action updates a #${id} cerveza`;
  }

  remove(id: number) {
    return `This action removes a #${id} cerveza`;
  }
}
