import { PartialType } from '@nestjs/mapped-types';
import { CreateSuscripcioneDto } from './create-suscripcione.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { TipoEnvio } from 'src/enum/tipo-envio';

export class UpdateSuscripcioneDto extends PartialType(CreateSuscripcioneDto) {
    @ApiProperty({default: "SILVER", description:'tipo de suscripcion del usuario', enum:TipoSuscripcion}) // === actualizado === 
    public nombre: TipoSuscripcion;
    @ApiProperty({default:12000, description:'precio de la suscripcion'}) // === Actualizado ===
    public precio: number;
    @ApiProperty({default:"5%", description:'descuento de la suscripcion'}) // === Actualizado ===
    public descuento: number;
    @ApiProperty({default: "Express",description:'tipo de envio de la suscripcion', enum: TipoEnvio}) // === Actualizado ===
    public tipo_envio: TipoEnvio;// o puede ser enum si definimos los tipos
    @ApiProperty({default: "Cerveza1, Cerveza3", description:'lista de cervezas que incluye la suscripcion'})
    public items_promocion: Cerveza[]; //items que contiene la promoción
}
