import { Column, Entity, PrimaryColumn } from "typeorm";

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
    public tipo_suscripcion: string;
}
