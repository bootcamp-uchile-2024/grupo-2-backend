import { ApiProperty } from "@nestjs/swagger";
import { TipoCerveza } from "src/enum/tipos-cerveza";

export class getCerveza {
    @ApiProperty({description: 'id de la cerveza' })
    public id: number;
    
    @ApiProperty({description: 'Nombre de la cerveza' })
    public nombre: string;

    @ApiProperty({ description: 'Marca de la cerveza' })
    public marca: string;

    @ApiProperty({ description: 'Categoría de la cerveza'})
    public tipo_cerveza: TipoCerveza

    @ApiProperty({ description: 'Stock de la cerveza' })
    public stock: number;

    @ApiProperty({ description: 'Descripción de la cerveza' })
    public descripcion: string;

    @ApiProperty({ description: 'Precio de la cerveza' })
    public precio: number;

    @ApiProperty({description: 'Se entrega el id del Proveedor de la cerveza' })
    public proveedor: number;

    @ApiProperty({ description: 'Amargor de la cerveza'})
    public amargor: string;

    @ApiProperty({ description: 'Graduación de la cerveza, es número y puede ser decimal separado por un punto' })
    public graduacion: number;

    @ApiProperty({ description: 'Formato de la cerveza' })
    public formato: string;

    @ApiProperty({ description: 'Imagen de la cerveza' })
    public imagen: string;

    @ApiProperty({ description: 'tipo numérico: 1 para indicar que está activa y 0 para indicar que está inactiva' })
    public is_active: boolean;
}

