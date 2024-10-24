import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches, Min, ValidateNested } from 'class-validator';
import { UpdateDireccioneDto } from 'src/Datos_Envio/dto/update-direccione.dto';
import { Type } from 'class-transformer';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    
    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
    @Length(9, 10, { message: 'El rut del usuario debe tener entre 9 y 10 caracteres' })
    @Matches(/^\d{1,8}-[0-9Kk]{1}$/, { message: 'El RUT no tiene un formato válido.' })
    public rut: string;

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

    @IsNumber()
    public id_perfil: number;
    @IsString()
    public tipo_suscripcion: string;
}
