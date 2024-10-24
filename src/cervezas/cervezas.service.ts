import { Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';

import { IBU } from 'src/enum/amargor';
import { Region } from 'src/enum/regiones';
import { Formato } from 'src/enum/formato';
import { Comuna } from 'src/enum/comunas';
import { TipoCerveza } from 'src/enum/tipos-cerveza';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Cerveza } from './entities/cerveza.entity';
import { Amargor } from 'src/Amargor/amargor.entity';


@Injectable()
export class CervezasService {
  private cervezas = [];

  constructor(@InjectRepository(Cerveza) private readonly CervezaRepository: Repository<Cerveza>) {}

  create(createCervezaDto: CreateCervezaDto) {
     return `Se creo una Cerveza lo siguiente: ${JSON.stringify(createCervezaDto)}`
  }

  async findAll(nombre: string, marca: string, region: Region, comuna:Comuna, amargor:IBU, graduacion: string, formato: Formato): Promise <Cerveza[]> {
    const resultado: Cerveza[] = await this.CervezaRepository.find({
      select:{
        id: true,
        nombre: true,
        marca: true,
        stock: true,
        descripcion: true,
        precio: true,
        graduacion: true,
        imagen: true,
      },
      relations:{
        proveedor: true,
        tipo: true,
        amargor: true,
        formato: true
      }
    });
    console.log(resultado);
    return resultado;
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
