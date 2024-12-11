import { Column, Entity, PrimaryColumn } from "typeorm";
import { Suscripcion } from "src/suscripciones/entities/suscripcione.entity";
import { ManyToOne, JoinColumn } from 'typeorm';
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";

@Entity({name: 'Usuario'})
export class Usuario {
    @PrimaryColumn()
    public rut: string;
    
    @Column()
    public nombre: string;
    
    @Column()
    public apellido: string;
   
    @Column({name: 'contrasena'})
    public contrasenia: string;
    
    @Column()
    public edad: number;
    
    @Column()
    public tipo_suscripcion: TipoSuscripcion;
    
    @Column()   
    public correo_comprador: string;
    
    @Column()
    public telefono_comprador: string;

    @ManyToOne(() => Suscripcion)
    @JoinColumn({ name: 'tipo_suscripcion' })
    suscripcion: Suscripcion;


}

