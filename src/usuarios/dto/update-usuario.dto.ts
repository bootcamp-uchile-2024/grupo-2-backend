import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Suscripcione } from 'src/suscripciones/entities/suscripcione.entity';
import { CreateUsuarioDto } from './create-usuario.dto';
import { Direccione } from 'src/direcciones/entities/direccione.entity';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) // === Modificado por mi
    public nombre: string;
    @IsString()
    @ApiProperty({ default: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;
    @IsEmail()
    @ApiProperty({ default: 'juan@123.cl', description: 'Correo del usuario' }) // === Modificado por mi
    public correo: string;
    @IsString()
    @ApiProperty({ default: '123456', description: 'Contraseña del usuario' }) // === Modificado por mi
    public contraseña: string;
    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ default: Direccione, description: 'Direcciones', type: [Direccione] }) // === Actualizado ===
    public direcciones: Direccione[]; //una o varias direcciones por usuario
    @IsString()
    @ApiProperty({ default: '955534455', description: 'Celular'}) // === Modificado por mi
    public telefono: string; //lo convertimos a number internamente
    @IsNumber()
    @Min(18)
    @ApiProperty({ default: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    //Creo que estos dos se deberían modificar desde un servicio específico para esto pero no desde el update de usuario
    //@ApiProperty({ default: 'Gold', description: 'tipo de suscripcion de usuario' }) // === Modificado por mi
    //public suscripcion: Suscripcione; //una sola suscripcion por usuario
    //@ApiProperty({ default: [], description: 'Direccion', type:[Direccione] }) // === Modificado por mi
    //public direccion: Direccione[] ;  // === Modificado por mi
}
