import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Usuario {
    @ApiProperty({default:'11111111-1'})
    public rut: string;
    @ApiProperty({default:'Nombre usuario'})
    public nombre: string;
    @ApiProperty({ default: 'Apellido usuario'}) 
    public apellido: string;
    @ApiProperty({default:'Contraseña usuario'})
    public contraseña: string;
    @ApiProperty({default:'Edad usuario'})
    public edad: number;
    public id_perfil: number;
    @ApiProperty({default:'Suscripción pagada por el usuario'})
    public tipo_suscripcion?: Suscripcione; //una sola suscripcion por usuario === Modificado por mi deberia ser opcional 

}
