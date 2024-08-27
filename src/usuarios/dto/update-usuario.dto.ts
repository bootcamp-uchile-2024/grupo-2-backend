import { ApiProperty } from '@nestjs/swagger';
import { Region } from 'src/enum/regiones';
import { Suscripcione } from 'src/suscripciones/entities/suscripcione.entity';

export class UpdateUsuarioDto{
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
    public suscripcion: Suscripcione; //una sola suscripcion por usuario
}
