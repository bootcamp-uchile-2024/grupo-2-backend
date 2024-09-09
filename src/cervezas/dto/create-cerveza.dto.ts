import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { IBU } from "src/enum/amargor";
import { Comuna } from "src/enum/comunas";
import { Formato } from "src/enum/formato";
import { Region } from "src/enum/regiones";
import { TipoCerveza } from "src/enum/tipos-cerveza";


export class CreateCervezaDto {
    @IsNotEmpty()
    @ApiProperty({ default: 'Torobayo', description: 'Nombre de la cerveza' })
    public nombre: string;
    @IsNotEmpty()
    @ApiProperty({ default: 'Kuntsmann', description: 'Marca de la cerveza' })
    public marca: string;
    @IsNotEmpty()
    @IsEnum(TipoCerveza)
    @ApiProperty({ default: 'Pale Ale', description: 'Categoría de la cerveza', enum: TipoCerveza })
    public categoria: TipoCerveza;
    @IsNotEmpty()
    @ApiProperty({ default: 100, description: 'Stock de la cerveza' })
    public stock: number;
    @ApiProperty({ default: 'Tiene un perfil de sabor equilibrado con notas de lúpulo fresco y un toque de caramelo, color es dorado brillante y amargor moderado que complementa su sabor maltoso', description: 'Descripción de la cerveza' })
    public descripcion?: string;
    @IsNumber()
    @ApiProperty({ default: 1000, description: 'Precio de la cerveza' })
    public precio: number;
    @IsNotEmpty()
    @ApiProperty({ default: 'CCU', description: 'Nombre Proveedor de la cerveza' })
    public proveedor: string;
    @IsNotEmpty()
    @IsEnum(Region)
    @ApiProperty({ default: 'Los Rios', description: 'Region de Origen de la cerveza', enum: Region })
    public region: Region;
    @IsNotEmpty()
    @IsEnum(Comuna)
    @ApiProperty({ default: 'Valdivia', description: 'Comuna Origen de la cerveza', enum: Comuna })
    public comuna: Comuna;
    @IsNotEmpty()
    @IsEnum(IBU)
    @ApiProperty({ default: 'Moderado', description: 'Amargor de la cerveza', enum: IBU })
    public amargor: IBU;
    @IsNotEmpty()
    @ApiProperty({ default: '5%', description: 'Graduación de la cerveza' })
    public graduacion: string;
    @IsNotEmpty()
    @IsEnum(Formato)
    @ApiProperty({ default: 'Botella', description: 'Formato de la cerveza', enum: Formato })
    public formato: Formato;
    @ApiProperty({ default: 'Imagen de la cerveza', description: 'Imagen de la cerveza' })
    public imagen: string;
}

