import { ApiProperty } from "@nestjs/swagger";
import { Comuna } from "src/enum/comunas";
import { Region } from "src/enum/regiones";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Direccione {
    @PrimaryColumn()
    public id: number;

    @Column()
    @ApiProperty({ default: 'Calle dirección' })
    public calle: string;

    @Column()
    @ApiProperty({ default: 'Número dirección' })
    public numero: number;

    @Column()
    @ApiProperty({ default: 'Numero de departamento dirección' })
    public departamento: string;

    @Column()
    @ApiProperty({ default: 'Ciudad dirección' })
    public id_comuna: Comuna;

    @Column()
    @ApiProperty({ default: 'Código postal dirección' })
    public codigo_Postal: string;

    @Column()
    @ApiProperty({ default: '11111111-1' })
    public rut_usuario: string;

    @Column()
    @ApiProperty({ default: '925362514' })
    public telefono: string;

    @Column()
    @ApiProperty({ default: 'abc@asd.cl' })
    public correo_electronico: string;
}


