import { ApiProperty } from "@nestjs/swagger";
import { Comunas } from "src/Comunas/comunas.entity";
import { Column, Entity } from "typeorm";
import { JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";


@Entity('Datos_Envio')
export class Direccione {
    @PrimaryGeneratedColumn()
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

    @Column({ default: 'activa' }) // Estado por defecto
    @ApiProperty({ default: 'activa', description: 'Estado de la dirección: activa/inactiva' })
    public estado: string;

    @ManyToOne(() => Comunas, {nullable: false})
    @JoinColumn({ name: 'id_comuna' })
    id_comuna: Comunas;
    

}


