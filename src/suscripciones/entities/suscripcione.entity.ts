import { ApiProperty } from "@nestjs/swagger";

export class Suscripcione {
    @ApiProperty()
    public id: number;
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
