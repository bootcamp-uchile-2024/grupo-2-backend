import { PartialType } from '@nestjs/mapped-types';
import { CreateSuscripcioneDto } from './create-suscripcione.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSuscripcioneDto extends PartialType(CreateSuscripcioneDto) {
    @ApiProperty({default: "Nombre de la Suscripcion"})
    public nombre: string;
    @ApiProperty({default:"Precio"})
    public precio: number;
    @ApiProperty({default:"% descuento"})
    public descuento: number;
    @ApiProperty({default: "tipo de envio"})
    public tipo_envio: string;// o puede ser enum si definimos los tipos
    @ApiProperty({default: "cervezas que incluye"})
    public items_promocion: string[]; //items que contiene la promoción
}
