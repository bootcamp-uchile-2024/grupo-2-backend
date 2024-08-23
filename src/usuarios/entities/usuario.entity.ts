import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/enum/regiones";
import { Pedido } from "src/pedidos/entities/pedido.entity";

export class Usuario {
    @ApiProperty()
    public id: number;
    @ApiProperty()
    public nombre: string;
    @ApiProperty()
    public correo: string;
    @ApiProperty()
    public contraseña: string;
    @ApiProperty()
    public direccion: string;
    @ApiProperty()
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty()
    public region: Region; // Enum para que sea selector
    @ApiProperty()
    public edad: number;
    @ApiProperty()
    public historial_pedidos: Pedido[];
    //@ApiProperty()
    //public suscripcion: Suscripcion; //una sola suscripcion por usuario
}
