import e from "express";
import { SalidaUsuarioDto } from "../dto/salida-usuario.dto";
import { Usuario } from "../entities/usuario.entity";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";
import { TipoSuscripcion } from "../../enum/tipo-suscripcion";
import { HttpException, HttpStatus } from "@nestjs/common";



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

        if(Object.values(TipoSuscripcion).includes(dto.tipo_suscripcion as TipoSuscripcion)){
            usuario.tipo_suscripcion = dto.tipo_suscripcion as TipoSuscripcion;
        } else {
            throw new HttpException('Tipo de suscripción no válido', HttpStatus.BAD_REQUEST);
        }
        
      return usuario;
    }
}
