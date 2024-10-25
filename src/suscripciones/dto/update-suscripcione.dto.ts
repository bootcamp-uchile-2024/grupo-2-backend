import { PartialType } from '@nestjs/mapped-types';
import { CreateSuscripcioneDto } from './create-suscripcione.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { TipoEnvio } from 'src/enum/tipo-envio';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class UpdateSuscripcioneDto extends PartialType(CreateSuscripcioneDto) {
    @IsEnum(TipoSuscripcion)
    @ApiProperty({default: "Plata Premium", description:'tipo de suscripcion del usuario', enum:TipoSuscripcion}) // === actualizado === 
    public nombre: TipoSuscripcion;

    @IsNumber({}, {message: "el precio de la suscripcion es number"})
    @ApiProperty({default:12000, description:'precio de la suscripcion'}) // === Actualizado ===
    public precio: number;

    @IsString({message: "el descuento de la suscripcion es string"})
    @ApiProperty({default:"5%", description:'descuento de la suscripcion'}) // === Actualizado ===
    public descuento: number;

    @IsEnum(TipoEnvio)
    @ApiProperty({default: "Express",description:'tipo de envio de la suscripcion', enum: TipoEnvio}) // === Actualizado ===
    public tipo_envio: TipoEnvio;// o puede ser enum si definimos los tipos

    @ApiProperty({default: "Cerveza1, Cerveza3", description:'lista de cervezas que incluye la suscripcion'})
    public items_promocion: Cerveza[]; //items que contiene la promoción
}
