import { ApiProperty } from "@nestjs/swagger";

import { IsEnum, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString, Matches } from "class-validator";

import { Comuna } from "src/enum/comunas";
import { Region } from "src/enum/regiones";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateDireccioneDto {
    @IsNotEmpty({message: 'El id del usuario es requerido'})
    @IsNumber({}, {message: 'El id del usuario debe ser un número'})
    @ApiProperty({ default: 1, description: 'ID del usuario al que pertenece la dirección' })
    public idUsuario: Usuario;

    @IsNotEmpty({message: 'El nombre de la calle es requerido'})
    @IsString({message: 'El nombre de la calle debe ser un texto'})
    @ApiProperty({ default: 'Los Encinos', description: 'Nombre de la calle de la dirección' })
    public calle: string;

    @IsNotEmpty({message: 'El número de la dirección es requerido'})   
    @IsNumber({}, {message: 'El número de la dirección debe ser un número'})
    @ApiProperty({ default: 307, description: 'Número de la dirección' })
    public numero: number;

    @IsString({message: 'El número de departamento debe ser un texto'})
    @ApiProperty({ default: '503 B', description: 'Número de departamento del la direccion' })
    public departamento?: string;

    @IsNotEmpty({message: 'La región de la dirección es requerida'})
    @IsString({message: 'La región de la dirección debe ser un texto'})
    @IsEnum(Region,{message: 'La región de la dirección no es válida'})
    @ApiProperty({ default: 'Región Metropolitana', description: 'Región de la dirección', enum: Region })
    public region: Region;

    @IsNotEmpty({message: 'La comuna de la dirección es requerida'})
    @IsString({message: 'La comuna de la dirección debe ser un texto'})
    @IsEnum(Comuna,{message: 'La comuna de la dirección no es válida'})
    @ApiProperty({ default: 'Puente Alto', description: 'Comuna de la dirección', enum: Comuna })
    public comuna: Comuna;

    @IsOptional()
    @IsString({message: 'El código postal de la dirección debe ser un texto de 7 dígitos'})
    @Matches(/^\d{7}$/,{message: 'El código postal de la dirección debe ser un texto de 7 dígitos'})
    @ApiProperty({ default: '2980909', description: 'Código postal de la dirección' })
    public codigoPostal?: string;
}

