import { PartialType } from '@nestjs/mapped-types';
import { CreateCervezaDto } from './create-cerveza.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Formato } from 'src/enum/formato';
import { Region } from 'src/enum/regiones';
import { CervezaArtesanal } from 'src/enum/tipos-cerveza';
import { IBU } from 'src/enum/amargor';

export class UpdateCervezaDto extends PartialType(CreateCervezaDto) {
    @ApiProperty()
    public nombre: string;
    @ApiProperty()
    public marca: string;
    @ApiProperty()
    public categoria: CervezaArtesanal;
    @ApiProperty()
    public stock: number;
    @ApiProperty()
    public descripcion: string;
    @ApiProperty()
    public precio: number;
    @ApiProperty()
    public proveedor: string;
    @ApiProperty()
    public region: Region;
    @ApiProperty()
    public amargor: IBU;
    @ApiProperty()
    public graduacion: string;
    @ApiProperty()
    public formato: Formato;
    @ApiProperty()
    public imagen: string;
}
