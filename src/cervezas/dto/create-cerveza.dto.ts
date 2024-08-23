import { ApiProperty } from "@nestjs/swagger";
import { Formato } from "src/enum/formato";
import { Region } from "src/enum/regiones";
import { CervezaArtesanal } from "src/enum/tipos-cerveza";

export class CreateCervezaDto {
    @ApiProperty()
    public id: number;
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
    public amargor: string;
    @ApiProperty()
    public graduacion: string;
    @ApiProperty()
    public formato: Formato;
    @ApiProperty()
    public imagen: string;
}

