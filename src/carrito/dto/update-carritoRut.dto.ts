import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarritoRutDto {
    @ApiProperty({description: 'el rut debe ser sin puntos y con guión, y debe existir en la base de datos'})
    public Rut: string;

}
