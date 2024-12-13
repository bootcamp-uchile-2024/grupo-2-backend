import { ApiProperty } from "@nestjs/swagger";

export class Credencial {
    @ApiProperty({description: 'correo del usuario'})
    public correo: string;
    @ApiProperty({description: 'clave a crear del usuario'})
    public password: string;
}