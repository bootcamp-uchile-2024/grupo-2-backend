import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Usuario {
    @ApiProperty()
    public id: number;
    @ApiProperty({default:'Nombre usuario'})
    public nombre: string;
    @ApiProperty({ default: 'Apellido usuario'}) 
    public apellido: string;
    @ApiProperty({default:'Correo usuario'})
    public correo: string;
    @ApiProperty({default:'Contraseña usuario'})
    public contraseña: string;
    @ApiProperty({default:'Dirección usuario'})
    public direcciones: Direccione[];        //===== una o varias direcciones por usuario //Modificado por mi
    @ApiProperty({default:'Número de teléfono usuario'})
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({default:'Edad usuario'})
    public edad: number;
    @ApiProperty({default:'Historial de pedidos usuario'})
    public historial_pedidos?: Pedido[];      // === Modificado por mi deberia ser opcional 
    @ApiProperty({default:'Suscripción pagada por el usuario'})
    public suscripcion?: Suscripcione; //una sola suscripcion por usuario === Modificado por mi deberia ser opcional 

}
