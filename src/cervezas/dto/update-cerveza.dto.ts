import { PartialType } from '@nestjs/mapped-types';
import { CreateCervezaDto } from './create-cerveza.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Formato } from 'src/enum/formato';
import { Region } from 'src/enum/regiones';
import { IBU } from 'src/enum/amargor';
import { Comuna } from 'src/enum/comunas';
import { TipoCerveza } from 'src/enum/tipos-cerveza';

import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCervezaDto extends PartialType(CreateCervezaDto) {
    @IsString({message: 'El nombre de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El nombre de la cerveza es requerido'})
    @ApiProperty({ default: 'Torobayo', description: 'Nombre de la cerveza' })
    public nombre: string;

    @IsString({message: 'La marca de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'La marca de la cerveza es requerida'})
    @ApiProperty({ default: 'Kuntsmann', description: 'Marca de la cerveza' })
    public marca: string;

    @IsString({message: 'El tipo de cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El tipo de cerveza es requerido'})
    @IsEnum(TipoCerveza, {message: 'El tipo de cerveza no es válido'})
    @ApiProperty({ default: 'Pale Ale', description: 'Categoría de la cerveza', enum: TipoCerveza })
    public categoria: TipoCerveza;


    @IsNumber({},{message: 'El stock de la cerveza debe ser un número'})
    @IsNotEmpty({message: 'El stock de la cerveza es requerido'})

    @ApiProperty({ default: 100, description: 'Stock de la cerveza' })
    public stock: number;

    @IsString({message: 'La descripción de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'La descripción de la cerveza es requerida'})
    @ApiProperty({ default: 'Tiene un perfil de sabor equilibrado con notas de lúpulo fresco y un toque de caramelo, color es dorado brillante y amargor moderado que complementa su sabor maltoso', description: 'Descripción de la cerveza' })
    public descripcion: string;

    @IsNumber({},{message: 'El precio de la cerveza debe ser un número'})
    @IsNotEmpty({message: 'El precio de la cerveza es requerido'})
    @ApiProperty({ default: 1000, description: 'Precio de la cerveza' })
    public precio: number;

    @IsString({message: 'El proveedor de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El proveedor de la cerveza es requerido'})
    @ApiProperty({ default: 'CCU', description: 'Nombre Proveedor de la cerveza' })
    public proveedor: string;

    @IsString({message: 'El origen de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El origen de la cerveza es requerido'})
    @IsEnum(Region, {message: 'La región de origen de la cerveza no es válida'})
    @ApiProperty({ default: 'Región de Los Ríos', description: 'Region de Origen de la cerveza', enum: Region })
    public region: Region;

    @IsString({message: 'La comuna de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'La comuna de la cerveza es requerida'})
    @IsEnum(Comuna,{message: 'La comuna de la cerveza no es válida'})
    @ApiProperty({ default: 'Valdivia', description: 'Comuna Origen de la cerveza', enum: Comuna })
    public comuna: Comuna;


    @IsString({message: 'El amargor de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El amargor de la cerveza es requerido'})
    @IsEnum(IBU, {message: 'El amargor de la cerveza no es válido'})
    @ApiProperty({ default: 'Moderado', description: 'Amargor de la cerveza', enum: IBU })
    public amargor: IBU;

    @IsString({message: 'La graduación de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'La graduación de la cerveza es requerida'})

    @ApiProperty({ default: '5%', description: 'Graduación de la cerveza' })
    public graduacion: string;

    @IsString({message: 'El formato de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'El formato de la cerveza es requerido'})
    @IsEnum(Formato,{message: 'El formato de la cerveza no es válido'})
    @ApiProperty({ default: 'Botella', description: 'Formato de la cerveza', enum: Formato })
    public formato: Formato;

    @IsString({message: 'La imagen de la cerveza debe ser un texto'})
    @IsNotEmpty({message: 'La imagen de la cerveza es requerida'})
    @ApiProperty({ default: 'https://placehold.co/400x600', description: 'Imagen de la cerveza' })
    public imagen: string;
}
