import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, Min, Validate } from "class-validator";
import { RutValidator } from "../pipe/rutValidation.pipe";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class SalidaUsuarioDto {
    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
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
