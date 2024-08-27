import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'Se insica que se creó un usuario correctamente';
  }

  findAll() {
    return `Se retorna un arreglo de usuarios como DTO de salida`;
  }

  findOne(id: number) {
    return `Se retorna un usuario como DTO de salida`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Se indica que se modificaron los atributos correctamente`;
  }

  remove(id: number) {
    return `Se indica que se eliminó el usuario correctamente`;
  }
}
