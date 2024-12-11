import { ApiProperty } from "@nestjs/swagger";

export class Credencial {
    @ApiProperty({description: 'nombre de usuario'})
    public rut: string;
    @ApiProperty({description: 'clave a crear del usuario'})
    public password: string;
}