import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length, Matches, Min } from "class-validator";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class SalidaUsuarioDto {
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

    @Min(18) //validacion para edad, debe ser mayor o igual a 18.
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    @IsString()
    public tipo_suscripcion: string;
}
