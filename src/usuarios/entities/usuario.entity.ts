import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/enum/regiones";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Usuario {
    @ApiProperty()
    public id: number;
    @ApiProperty({default:'Nombre usuario'})
    public nombre: string;
    @ApiProperty({default:'Correo usuario'})
    public correo: string;
    @ApiProperty({default:'Contraseña usuario'})
    public contraseña: string;
    @ApiProperty({default:'Dirección usuario'})
    public direccion: string;
    @ApiProperty({default:'Número de teléfono usuario'})
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({default:'Región en la que reside el usuario'})
    public region: Region; // Enum para que sea selector
    @ApiProperty({default:'Edad usuario'})
    public edad: number;
    @ApiProperty({default:'Historial de pedidos usuario'})
    public historial_pedidos: Pedido[];
    @ApiProperty({default:'Suscripción pagada por el usuario'})
    public suscripcion: Suscripcione; //una sola suscripcion por usuario
}
