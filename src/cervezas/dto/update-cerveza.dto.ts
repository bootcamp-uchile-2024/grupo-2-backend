import { PartialType } from '@nestjs/mapped-types';
import { CreateCervezaDto } from './create-cerveza.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Formato } from 'src/enum/formato';
import { Region } from 'src/enum/regiones';

import { IBU } from 'src/enum/amargor';
import { Comuna } from 'src/enum/comunas';
import { TipoCerveza } from 'src/enum/tipos-cerveza';

export class UpdateCervezaDto extends PartialType(CreateCervezaDto) {
    @ApiProperty({ default: 'Torobayo', description: 'Nombre de la cerveza' })
    public nombre: string;
    @ApiProperty({ default: 'Kuntsmann', description: 'Marca de la cerveza' })
    public marca: string;
   @ApiProperty({ default: 'Pale Ale', description: 'Categoría de la cerveza', enum: TipoCerveza })
    public categoria: TipoCerveza;
   @ApiProperty({ default: 100, description: 'Stock de la cerveza' })
    public stock: number;
    @ApiProperty({ default: 'Tiene un perfil de sabor equilibrado con notas de lúpulo fresco y un toque de caramelo, color es dorado brillante y amargor moderado que complementa su sabor maltoso', description: 'Descripción de la cerveza' })
    public descripcion: string;
    @ApiProperty({ default: 1000, description: 'Precio de la cerveza' })
    public precio: number;
    @ApiProperty({ default: 'CCU', description: 'Nombre Proveedor de la cerveza' })
    public proveedor: string;
    @ApiProperty({ default: 'Los Rios', description: 'Region de Origen de la cerveza', enum: Region })
    public region: Region;
    @ApiProperty({ default: 'Valdivia', description: 'Comuna Origen de la cerveza', enum: Comuna })
    public comuna: Comuna;
    @ApiProperty({ default: 'Moderado', description: 'Amargor de la cerveza', enum: IBU })
    public amargor: IBU;
    @ApiProperty({ default: '5%', description: 'Graduación de la cerveza' })
    public graduacion: string;
    @ApiProperty({ default: 'Botella', description: 'Formato de la cerveza', enum: Formato})
    public formato: Formato;
    @ApiProperty({ default: 'Imagen de la cerveza', description: 'Imagen de la cerveza' })
    public imagen: string;
}
