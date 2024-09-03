import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/direcciones/entities/direccione.entity";
import { Region } from "src/enum/regiones";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class SalidaUsuarioDto {
    @ApiProperty()
    public id: number;
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Modificado por mi
    public nombre: string;
    @ApiProperty({ default: 'juan@123.cl', description: 'Apellido del usuario' }) // === Modificado por mi
    public correo: string;
    @ApiProperty({ default: '955534455', description: 'Celular' }) // === Modificado por mi
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({ default: [], description: 'Direccion', type:[Direccione] }) // === Modificado por mi
    public direcciones: Direccione[] ;  // === Modificado por mi
    @ApiProperty({ default: 25, description: 'Edad' })
    public edad: number;
    @ApiProperty()
    public historial_pedidos: Pedido[];
    @ApiProperty({ default: 'Gold', description: 'tipo de suscripcion de usuario' }) // === Modificado por mi
    public suscripcion: Suscripcione; //una sola suscripcion por usuario
}
