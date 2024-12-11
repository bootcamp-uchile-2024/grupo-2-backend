import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Min, IsEnum, IsOptional, Validate } from "class-validator";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { IsCorreoTelefonoRequerido } from 'src/common/validadorTelYCorreoUsuario';
import { RutValidator } from "../pipe/rutValidation.pipe";
import { Rol } from "src/enum/rol.enum";


export class CreateUsuarioInvitadoDto {
    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
    @Validate(RutValidator)
    @ApiProperty({ default: '12345678-9', description: 'sin puntos, sólo con guion' })
    public rut: string;

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;

    @IsString({ message: 'El apellido del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El apellido del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;

    @Min(18) //validacion para edad, debe ser mayor o igual a 18.
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    @IsString()
    @IsEnum(TipoSuscripcion)
    @ApiProperty({ enum: TipoSuscripcion })
    public tipo_suscripcion: string = 'SIN_SUSCRIPCION';

    @IsCorreoTelefonoRequerido('tipo_suscripcion', { message: 'Correo es requerido cuando el tipo de suscripción es SIN_SUSCRIPCION' })
    @IsString()
    @ApiProperty({default:'aaaaa@aaaa.cl'})
    public correo_comprador?: string;

    @IsCorreoTelefonoRequerido('tipo_suscripcion', { message: 'Teléfono es requerido cuando el tipo de suscripción es SIN_SUSCRIPCION' })
    @IsString()
    @ApiProperty({default:'65211449'})
    public telefono_comprador?: string;

    @IsString()
    @ApiProperty({enum: Rol, default:'user'})
    public rol: string;

}
