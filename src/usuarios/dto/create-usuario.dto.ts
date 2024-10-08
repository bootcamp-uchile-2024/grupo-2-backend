import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNotEmpty, IsString, Matches, Min, ValidateNested } from "class-validator";
import { CreateDireccioneDto } from "src/direcciones/dto/create-direccione.dto";
import { Direccione } from "src/direcciones/entities/direccione.entity";



export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;
   
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;
   
    @IsEmail()
    @ApiProperty({ default: 'juan@123.cl', description: 'Correo del usuario' }) // === Actualizado ===
    public correo: string;
   
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: '123456', description: 'Contraseña del usuario' }) // === Actualizado ===
    public contraseña: string;
   
    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateDireccioneDto)
    @ApiProperty({ default: CreateDireccioneDto, description: 'Direcciones', type: [CreateDireccioneDto] }) // === Actualizado ===
    public direcciones: Direccione[]; //una o varias direcciones por usuario
   
    @IsString()
    @Matches(/^\d{9}$/, { message: 'El Movil del comprador debe ser un número de 9 dígitos' })
    @ApiProperty({ default: '955534455', description: 'Celular' }) // === Actualizado ===
    public telefono: string; //lo convertimos a number internamente
   
    @Min(18) //validacion para edad, debe ser mayor o igual a 18.
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    //Comento las suscripciones porque deberían agregarse al usuario una vez se paga y no
    //necesariamente cuando se crea el usuario
    //@ApiProperty({ default: "SILVER", description: 'tipo de suscripcion de usuario' }) // === Actualizado ===
    //public suscripcion?: Suscripcione; //una sola suscripcion por usuario

    //Comento lo de las direcciones porque no se deberían pedir en la creación del usuario, sino agregarse 
    //una vez se crea la direcion a traves de su propio servicio
    //@ApiProperty({ default: [], description: 'Direccion', type:[Direccione] }) // === Actualizado ===
    //public direccion: Direccione[] ;  // === Actualizado ===
}


