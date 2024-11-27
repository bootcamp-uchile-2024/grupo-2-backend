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
//================================================================================================
async create(createDireccioneDto: CreateDireccioneDto) {
  const { rut_usuario, id_comuna } = createDireccioneDto;

  // Verificar si el usuario existe
  const usuario = await this.usuarioRepository.findOneBy({ rut: rut_usuario });
  if (!usuario) {
    throw new NotFoundException(`El usuario con RUT ${rut_usuario} no existe.`);
  }

  // Verificar si la comuna existe
  const comuna = await this.comunaRepository.findOne({ where: { id: id_comuna } });
  if (!comuna) {
    throw new NotFoundException(`La comuna con ID ${id_comuna} no existe.`);
  }

  // Crear el objeto Direccione, asignando la comuna como un objeto
  const nuevaDireccion = this.direccioneRepository.create({
    ...createDireccioneDto,
    id_comuna: comuna,  // Asignar la entidad Comuna completa
  });

  // Guardar la nueva dirección
  return await this.direccioneRepository.save(nuevaDireccion);
}
//================================================================================================
async findByRutUsuario(rut_usuario: string) {
  // Verificar si el usuario existe
  const usuario = await this.usuarioRepository.findOneBy({ rut: rut_usuario });
  if (!usuario) {
    throw new NotFoundException(`El usuario con RUT ${rut_usuario} no existe.`);
  }

  // Obtener las direcciones asociadas al usuario
  const direcciones = await this.direccioneRepository.find({
    where: { rut_usuario },  // Filtrar por el RUT del usuario
  });

  if (!direcciones || direcciones.length === 0) {
    throw new NotFoundException(`No se encontraron direcciones para el usuario con RUT ${rut_usuario}.`);
  }

  return direcciones;
}
//================================================================================================

async updateByRutUsuario(rut_usuario: string, updateDireccioneDto: UpdateDireccioneDto) {
  // Buscar al usuario por su rut
  const usuario = await this.usuarioRepository.findOne({ where: { rut: rut_usuario } });

  if (!usuario) {
    throw new NotFoundException(`Usuario con RUT ${rut_usuario} no encontrado`);
  }

  // Obtener todas las direcciones asociadas al usuario
  const direcciones = await this.direccioneRepository.find({ where: { rut_usuario: usuario.rut } });

  if (direcciones.length === 0) {
    throw new NotFoundException(`No se encontraron direcciones para el usuario con RUT ${rut_usuario}`);
  }

  // Actualizar las direcciones encontradas
  for (const direccion of direcciones) {
    // Asignar los nuevos valores de updateDireccioneDto a la dirección
    Object.assign(direccion, updateDireccioneDto);
    await this.direccioneRepository.save(direccion); // Guardar la dirección actualizada
  }

  return direcciones;  // Retorna las direcciones actualizadas
}
//================================================================================================
/*async remove(id: number) {
  // Buscar la dirección por id
  const direccion = await this.direccioneRepository.findOne({ where: { id } });

  if (!direccion) {
    throw new NotFoundException(`La dirección con ID ${id} no fue encontrada`);
  }

  // Eliminar la dirección
  await this.direccioneRepository.delete(id);
  return { message: `Dirección con ID ${id} eliminada correctamente` };
}*/
}
