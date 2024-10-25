import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SalidaUsuarioDto } from './dto/salida-usuario.dto';
import { DireccionesService } from 'src/Datos_Envio/direcciones.service';

@Injectable()
export class UsuariosService {
  private usuarios = [];

  constructor(private readonly direccionesService: DireccionesService) {
    this.initializeUsers();
  }

  // Método para inicializar usuarios y vincular direcciones
  private async initializeUsers() {
    // obtener las direcciones correctamente como una Promesa
    const direcciones = await this.direccionesService.findAll();

    this.usuarios.push({
      rut: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      contrasenia: '123',
      edad: 20
    });

    this.usuarios.push({
      id: 2,
      nombre: 'Pedro',
      apellido: 'Gonzalez',
      contrasenia: 'abc',
      edad: 30
    });

    this.usuarios.push({
      id: 3,
      nombre: 'Maria',
      apellido: 'Diaz',
      contrasenia: 'xyz',
      edad: 40
    });
  }

  create(createUsuarioDto: CreateUsuarioDto) {
     return `Se creo el siguiente usuario: ${JSON.stringify(createUsuarioDto)}`;
  }

  findAll() {
    return this.usuarios.map(usuario => {
      const usuarioDto = new SalidaUsuarioDto();
      usuarioDto.rut = usuario.rut;
      usuarioDto.nombre = usuario.nombre;
      usuarioDto.apellido = usuario.apellido;
      usuarioDto.edad = usuario.edad;
      return usuarioDto;
    });
  }

  findOne(id: number) {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    if (!usuario) {
      throw new BadRequestException('No existe el usuario con el id entregado');
    } else {
      const usuarioDto = new SalidaUsuarioDto();
      usuarioDto.rut = usuario.rut;
      usuarioDto.nombre = usuario.nombre;
      usuarioDto.apellido = usuario.apellido;
      usuarioDto.edad = usuario.edad;
      return usuarioDto;
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
     return `Se edito el siguiente usuario: ${JSON.stringify(updateUsuarioDto)}`;
  }

  remove(id: number) {
    return `Se indica que se eliminó el usuario correctamente`;
  }
}
