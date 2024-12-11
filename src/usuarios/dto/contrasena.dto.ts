import { ApiProperty } from "@nestjs/swagger";

export class Contrasena {
    @ApiProperty({description: 'contraseña actual'})
    public contrasena_actual: string;
    @ApiProperty({description: 'nueva contraseña'})
    public contrasena_nueva: string;
}