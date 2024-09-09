import { Injectable } from '@nestjs/common';
import { Region } from 'src/enum/regiones';
import { Comuna } from 'src/enum/comunas';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';


@Injectable()
export class DireccionesService {
  private direcciones = [];
  constructor() {
    this.direcciones.push({ idUsuario: 1, calle: 'Calle 1', numero: 123, departamento: '503A', region: Region.AP, comuna: Comuna.ARICA, codigoPostal: '1234568' });
    this.direcciones.push({ idUsuario: 1, calle: 'Calle 2', numero: 456, departamento: 'B', region: Region.AN, comuna: Comuna.ANTOFAGASTA, codigoPostal: '4856789' });
    this.direcciones.push({ idUsuario: 2, calle: 'Calle 3', numero: 789, departamento: '430', region: Region.AT, comuna: Comuna.COPIAPO, codigoPostal: '7891238' });
    this.direcciones.push({ idUsuario: 2, calle: 'Calle 4', numero: 1011, departamento: '', region: Region.CO, comuna: Comuna.COQUIMBO, codigoPostal: '1011182' });
  }

  create(createDireccioneDto: CreateDireccioneDto) {
    return 'This action adds a new direccione';
  }

  findAll() {
    return this.direcciones;
  }

  findOne(id: number) {
    return this.direcciones.find(direccion => direccion.idUsuario == id);
  }

  update(id: number, updateDireccioneDto: UpdateDireccioneDto) {
    return `This action updates a #${id} direccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} direccione`;
  }
}










