import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Suscripcion"})
export class Suscripcion{
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public tipo_suscripcion: TipoSuscripcion;
    @Column()
    public descripcion: string;
    @Column()
    public nombre: string;
    @Column()
    public precio: number;
    @Column()
    public descuento: number;
    @Column()
    public tipo_envio: number;
}
