import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

export class CreateSuscripcioneDto {
    @ApiProperty({default: "Nombre de la Suscripcion"})
    public nombre: string;
    @ApiProperty({default:"Precio"})
    public precio: number;
    @ApiProperty({default:"% descuento"})
    public descuento: number;
    @ApiProperty({default: "tipo de envio"})
    public tipo_envio: string;// o puede ser enum si definimos los tipos
    @ApiProperty({default: "lista de cervezas que incluye"})
    public items_promocion: Cerveza[]; //items que contiene la promoción
}
