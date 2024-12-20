import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { Direccione } from './entities/direccione.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Comunas } from 'src/Comunas/comunas.entity';

@Injectable()
export class DireccionesService {
  constructor(
    @InjectRepository(Comunas)
    private readonly comunaRepository: Repository<Comunas>,
    @InjectRepository(Direccione)
    private readonly direccioneRepository: Repository<Direccione>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

async create(createDireccioneDto: CreateDireccioneDto) {
  const { rut_usuario, id_comuna } = createDireccioneDto;

  const usuario = await this.usuarioRepository.findOneBy({ rut: rut_usuario });
  if (!usuario) {
    throw new NotFoundException(`El usuario con RUT ${rut_usuario} no existe.`);
  }

  const comuna = await this.comunaRepository.findOne({ where: { id: id_comuna } });
  if (!comuna) {
    throw new NotFoundException(`La comuna con ID ${id_comuna} no existe.`);
  }

  const nuevaDireccion = this.direccioneRepository.create({
    ...createDireccioneDto,
    estado: 'activo', 
    id_comuna: comuna,
  });

  return await this.direccioneRepository.save(nuevaDireccion);
}

async findByRutUsuario(rut_usuario: string) {
  
  const usuario = await this.usuarioRepository.findOneBy({ rut: rut_usuario });
  if (!usuario) {
    throw new NotFoundException(`El usuario con RUT ${rut_usuario} no existe.`);
  }

  
  const direcciones = await this.direccioneRepository.find({
    where: { rut_usuario },  
  });

  if (!direcciones || direcciones.length === 0) {
    throw new NotFoundException(`No se encontraron direcciones para el usuario con RUT ${rut_usuario}.`);
  }

  return direcciones;
}


async updateByRutUsuario(rut_usuario: string, updateDireccioneDto: UpdateDireccioneDto) {
  
  const usuario = await this.usuarioRepository.findOne({ where: { rut: rut_usuario } });

  if (!usuario) {
    throw new NotFoundException(`Usuario con RUT ${rut_usuario} no encontrado`);
  }

  
  const direcciones = await this.direccioneRepository.find({ where: { rut_usuario: usuario.rut } });

  if (direcciones.length === 0) {
    throw new NotFoundException(`No se encontraron direcciones para el usuario con RUT ${rut_usuario}`);
  }

  
  for (const direccion of direcciones) {
    
    Object.assign(direccion, updateDireccioneDto);
    await this.direccioneRepository.save(direccion); 
  }

  return direcciones;  
}



async cambiarEstadoDireccion(id: number): Promise<Direccione> {
  const direccion = await this.direccioneRepository.findOne({ where: { id } });

  if (!direccion) {
    throw new NotFoundException(`La dirección con ID ${id} no existe.`);
  }

  
  direccion.estado = direccion.estado === 'activa' ? 'inactiva' : 'activa';

  return await this.direccioneRepository.save(direccion);
}
}
