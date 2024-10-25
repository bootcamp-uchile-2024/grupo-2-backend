import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { TipoEnvio } from "src/enum/tipo-envio";


export class Suscripcione {
   
    public id: number;
    
    public nombre: TipoSuscripcion;
    
    public precio: number;
    
    public descuento: number;
    
    public tipo_envio: TipoEnvio;// o puede ser enum si definimos los tipos
    
    public items_promocion: Cerveza[]; //items que contiene la promoción
}
