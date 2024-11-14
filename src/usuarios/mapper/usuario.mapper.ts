import e from "express";
import { SalidaUsuarioDto } from "../dto/salida-usuario.dto";
import { Usuario } from "../entities/usuario.entity";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";

export class UsuarioMapper{
    static entityToDto(entidad: Usuario): SalidaUsuarioDto{
        const usuarioDto = new SalidaUsuarioDto();
        usuarioDto.rut = entidad.rut;
        usuarioDto.nombre = entidad.nombre;
        usuarioDto.apellido = entidad.apellido;
        usuarioDto.edad = entidad.edad;
        usuarioDto.tipo_suscripcion = entidad.tipo_suscripcion;
      return usuarioDto;
    }

    static dtoToEntity(dto: UpdateUsuarioDto): Usuario{
        const usuario = new Usuario();
        usuario.nombre = dto.nombre;
        usuario.apellido = dto.apellido;
        usuario.edad = dto.edad;
        usuario.contrasenia = dto.contrasenia;
        usuario.tipo_suscripcion = dto.tipo_suscripcion;
      return usuario;
    }
}