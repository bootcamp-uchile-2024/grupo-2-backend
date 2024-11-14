import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, Matches, Min, ValidateNested } from 'class-validator';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';


export class UpdateUsuarioDto{

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;
   
    @IsString({ message: 'El apellido del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El apellido del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;

    @IsString({ message: 'La contraseña del comprador debe ser un string' })
    @IsNotEmpty({ message: 'La contraseña del comprador no puede estar vacía' })
    @ApiProperty({ default: '123456', description: 'Contraseña del usuario' }) // === Actualizado ===
    public contrasenia: string;

    @Min(18) //validacion para edad, debe ser mayor o igual a 18.
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    @IsString()
    @IsEnum(TipoSuscripcion)
    @ApiProperty({enum: TipoSuscripcion})
    public tipo_suscripcion: string;

}
