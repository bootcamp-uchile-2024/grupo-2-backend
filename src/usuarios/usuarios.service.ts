import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DireccionesService } from 'src/direcciones/direcciones.service';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';

@Injectable()
export class UsuariosService {
  private usuarios = [];

  constructor(private readonly direccionesService: DireccionesService) {
    // Vincular direcciones a los usuarios según el idUsuario
    const direcciones = this.direccionesService.findAll();

    this.usuarios.push({
      id: 1,
      nombre: 'Juan',
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
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Se indica que se modificaron los atributos correctamente`;
  }

  remove(id: number) {
    return `Se indica que se eliminó el usuario correctamente`;
  }
}
