import { ApiProperty } from "@nestjs/swagger";
import { Direccione } from "src/direcciones/entities/direccione.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";


export class CreateUsuarioDto {
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;
    @ApiProperty({ default: 'juan@123.cl', description: 'Apellido del usuario' }) // === Actualizado ===
    public correo: string;
    @ApiProperty({ default: '123456', description: 'Contraseña del usuario' }) // === Actualizado ===
    public contraseña: string;
    @ApiProperty({ default: '955534455', description: 'Celular' }) // === Actualizado ===
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({ default: [], description: 'Direccion', type:[Direccione] }) // === Actualizado ===
    public direcciones: Direccione[] ;  // === Actualizado ===
    @ApiProperty({ default: 25, description: 'Edad' })
    public edad: number;
    @ApiProperty({ default: "SILVER", description: 'tipo de suscripcion de usuario' }) // === Actualizado ===
    public suscripcion?: Suscripcione; //una sola suscripcion por usuario
}
   

