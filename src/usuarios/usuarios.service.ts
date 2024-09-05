import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DireccionesService } from 'src/direcciones/direcciones.service';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { SalidaUsuarioDto } from './dto/salida-usuario.dto';

@Injectable()
export class UsuariosService {
  private usuarios = [];

  constructor(private readonly direccionesService: DireccionesService) {
    // Vincular direcciones a los usuarios según el idUsuario
    const direcciones = this.direccionesService.findAll();

    this.usuarios.push({
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      correo: 'abc@abc.cl',
      contraseña: '123',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 1), // === Actualizado === Filtra direcciones del usuario
      telefono: '123456789',
      edad: 20,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.SILVER
    });

    this.usuarios.push({
      id: 2,
      nombre: 'Pedro',
      apellido: 'Gonzalez',
      correo: '123@123.cl',
      contraseña: 'abc',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 2), // === Actualizado === Filtra direcciones del usuario
      telefono: '987654321',
      edad: 30,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.GOLDEN
    });

    this.usuarios.push({
      id: 3,
      nombre: 'Maria',
      apellido: 'Diaz',
      correo: '345@345.cl',
      contraseña: 'xyz',
      direccion: direcciones.filter(direccion => direccion.idUsuario === 3), // === Actualizado === Filtra direcciones del usuario
      telefono: '456789123',
      edad: 40,
      historial_pedidos: [],
      suscripcion: TipoSuscripcion.PLATINUM
    });
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'Se indica que se creó un usuario correctamente';
  }

  findAll() {
    let usuariosSalida: SalidaUsuarioDto[] = []
    for(let i: number = 0; i < this.usuarios.length; i++){
      let usuarioDto = new SalidaUsuarioDto();
      usuarioDto.id = this.usuarios[i].id;
      usuarioDto.nombre = this.usuarios[i].nombre;
      usuarioDto.apellido = this.usuarios[i].apellido;
      usuarioDto.correo = this.usuarios[i].correo;
      usuarioDto.direcciones = this.usuarios[i].direcciones;
      usuarioDto.telefono = this.usuarios[i].telefono;
      usuarioDto.edad = this.usuarios[i].edad;
      usuarioDto.historial_pedidos = this.usuarios[i].historial_pedidos;
      usuarioDto.suscripcion = this.usuarios[i].suscripcion;
      usuariosSalida.push(usuarioDto);
    }

    return usuariosSalida;
  }

  findOne(id: number) {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    let usuarioDto: SalidaUsuarioDto = new SalidaUsuarioDto();
    usuarioDto.id = usuario.id;
    usuarioDto.nombre = usuario.nombre;
    usuarioDto.apellido = usuario.apellido;
    usuarioDto.correo = usuario.correo;
    usuarioDto.direcciones = usuario.direcciones;
    usuarioDto.telefono = usuario.telefono;
    usuarioDto.edad = usuario.edad;
    usuarioDto.historial_pedidos = usuario.historial_pedidos;
    usuarioDto.suscripcion = usuario.suscripcion;
    return usuarioDto;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Se indica que se modificaron los atributos correctamente`;
  }

  remove(id: number) {
    return `Se indica que se eliminó el usuario correctamente`;
  }
}
