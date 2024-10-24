import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class SalidaUsuarioDto {
    @ApiProperty()
    public id: number;
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;
    @ApiProperty({ default: 'juan@123.cl', description: 'Apellido del usuario' }) // === Actualizado ===
    public correo: string;
    @ApiProperty({ default: '955534455', description: 'Celular' }) // === Actualizado ===
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({ default:Direccione, description: 'Direccion', type:[Direccione] }) // === Actualizado ===
    public direcciones: Direccione[];  // === Actualizado ===
    @ApiProperty({ default: 25, description: 'Edad' })
    public edad: number;
    @ApiProperty()
    public historial_pedidos: Pedido[];
    @ApiProperty({ default: 'Plata Premium', description: 'tipo de suscripcion de usuario' }) // === Actualizado ===
    public suscripcion: Suscripcione; //una sola suscripcion por usuario
}
