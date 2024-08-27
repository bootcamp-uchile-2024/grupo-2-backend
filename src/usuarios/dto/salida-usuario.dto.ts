import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/enum/regiones";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class Usuario {
    @ApiProperty()
    public id: number;
    @ApiProperty()
    public nombre: string;
    @ApiProperty()
    public correo: string;
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
    @ApiProperty()
    public suscripcion: Suscripcione; //una sola suscripcion por usuario
}