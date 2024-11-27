import { ApiProperty } from "@nestjs/swagger";
import { Comunas } from "src/Comunas/comunas.entity";
import { Comuna } from "src/enum/comunas";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { JoinColumn, ManyToOne } from "typeorm";


@Entity('Datos_Envio')
export class Direccione {
    @PrimaryColumn()
    public id: number;

    @Column()
    @ApiProperty({ default: 'Seminario' })
    public calle: string;

    @Column()
    @ApiProperty({ default: '10352' })
    public numero: number;

    @Column()
    @ApiProperty({ default: '502' })
    public departamento?: string;

    @Column()
    @ApiProperty({ default: '2568888' })
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

    @ManyToOne(() => Comunas, {nullable: false})
    @JoinColumn({ name: 'id_comuna' })
    id_comuna: Comunas;
    

}


