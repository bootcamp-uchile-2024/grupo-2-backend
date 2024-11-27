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
  async findAll() {
    return await this.direccioneRepository.find();
  }

  async findOne(id: number) {
    const direccion = await this.direccioneRepository.findOneBy({ id });
    if (!direccion) {
      throw new NotFoundException(`La dirección con ID ${id} no existe.`);
    }
    return direccion;
  }

  async update(id: number, updateDireccioneDto: UpdateDireccioneDto) {
    const direccion = await this.direccioneRepository.findOneBy({ id });
    if (!direccion) {
      throw new NotFoundException(`La dirección con ID ${id} no existe.`);
    }

    Object.assign(direccion, updateDireccioneDto);
    return await this.direccioneRepository.save(direccion);
  }

  async remove(id: number) {
    const direccion = await this.direccioneRepository.findOneBy({ id });
    if (!direccion) {
      throw new NotFoundException(`La dirección con ID ${id} no existe.`);
    }

    await this.direccioneRepository.delete(id);
    return { message: `Dirección con ID ${id} eliminada correctamente.` };
  }
}
