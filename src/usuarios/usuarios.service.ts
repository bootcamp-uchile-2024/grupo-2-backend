import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DireccionesService } from 'src/direcciones/direcciones.service';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { SalidaUsuarioDto } from './dto/salida-usuario.dto';

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
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      correo: 'abc@abc.cl',
      contraseña: '123',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 1),
      telefono: '123456789',
      edad: 20,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.SILVER,
    });

    this.usuarios.push({
      id: 2,
      nombre: 'Pedro',
      apellido: 'Gonzalez',
      correo: '123@123.cl',
      contraseña: 'abc',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 2),
      telefono: '987654321',
      edad: 30,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.GOLDEN,
    });

    this.usuarios.push({
      id: 3,
      nombre: 'Maria',
      apellido: 'Diaz',
      correo: '345@345.cl',
      contraseña: 'xyz',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 3),
      telefono: '456789123',
      edad: 40,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.PLATINUM,
    });
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'Se indica que se creó un usuario correctamente';
  }

  findAll() {
    return this.usuarios.map(usuario => {
      const usuarioDto = new SalidaUsuarioDto();
      usuarioDto.id = usuario.id;
      usuarioDto.nombre = usuario.nombre;
      usuarioDto.apellido = usuario.apellido;
      usuarioDto.correo = usuario.correo;
      usuarioDto.direcciones = usuario.direccion;
      usuarioDto.telefono = usuario.telefono;
      usuarioDto.edad = usuario.edad;
      usuarioDto.historial_pedidos = usuario.historial_pedidos;
      usuarioDto.suscripcion = usuario.suscripcion;
      return usuarioDto;
    });
  }

  findOne(id: number) {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    if (!usuario) {
      throw new BadRequestException('No existe el usuario con el id entregado');
    } else {
      const usuarioDto = new SalidaUsuarioDto();
      usuarioDto.id = usuario.id;
      usuarioDto.nombre = usuario.nombre;
      usuarioDto.apellido = usuario.apellido;
      usuarioDto.correo = usuario.correo;
      usuarioDto.direcciones = usuario.direccion;
      usuarioDto.telefono = usuario.telefono;
      usuarioDto.edad = usuario.edad;
      usuarioDto.historial_pedidos = usuario.historial_pedidos;
      usuarioDto.suscripcion = usuario.suscripcion;
      return usuarioDto;
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Se indica que se modificaron los atributos correctamente`;
  }

  remove(id: number) {
    return `Se indica que se eliminó el usuario correctamente`;
  }
}
