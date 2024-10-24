import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Usuario {
    
    public rut: string;
    
    public nombre: string;
   
    public apellido: string;
   
    public contraseña: string;
    
    public edad: number;
    
    public id_perfil: number;
   
    public tipo_suscripcion?: Suscripcione; //una sola suscripcion por usuario === Modificado por mi deberia ser opcional 

}
