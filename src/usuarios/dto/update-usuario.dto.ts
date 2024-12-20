import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches, Min, ValidateNested } from 'class-validator';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { IsCorreoTelefonoRequerido } from 'src/common/validadorTelYCorreoUsuario';
import { Rol } from 'src/enum/rol.enum';


export class UpdateUsuarioDto{

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) 
    public nombre: string;
   
    @IsString({ message: 'El apellido del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El apellido del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) 
    public apellido: string;

    @Min(18) 
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    @IsCorreoTelefonoRequerido('tipo_suscripcion', { message: 'Correo es requerido cuando el tipo de suscripción es SIN_SUSCRIPCION' })
    @IsString()
    @IsOptional()
    @ApiProperty({default:'aaaaa@aaaa.cl'})
    public correo_comprador?: string;

    @IsCorreoTelefonoRequerido('tipo_suscripcion', { message: 'Teléfono es requerido cuando el tipo de suscripción es SIN_SUSCRIPCION' })
    @IsString()
    @IsOptional()
    @ApiProperty({default:'65211449'})
    public telefono_comprador?: string;

}

export class EstadoUsuario{
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ default: true, description: 'booleano: true para indicar que está activo y false para indicar que está inactivo' })
    public is_active: boolean;
}
