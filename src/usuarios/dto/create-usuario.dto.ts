import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches, Min, ValidateNested } from "class-validator";
import { CreateDireccioneDto } from "src/Datos_Envio/dto/create-direccione.dto";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";



export class CreateUsuarioDto {
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

    //Comento las suscripciones porque deberían agregarse al usuario una vez se paga y no
    //necesariamente cuando se crea el usuario
    //@ApiProperty({ default: "SILVER", description: 'tipo de suscripcion de usuario' }) // === Actualizado ===
    //public suscripcion?: Suscripcione; //una sola suscripcion por usuario

    //Comento lo de las direcciones porque no se deberían pedir en la creación del usuario, sino agregarse 
    //una vez se crea la direcion a traves de su propio servicio
    //@ApiProperty({ default: [], description: 'Direccion', type:[Direccione] }) // === Actualizado ===
    //public direccion: Direccione[] ;  // === Actualizado ===
}


