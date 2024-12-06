import { ApiProperty } from "@nestjs/swagger";
import { Comunas } from "src/Comunas/comunas.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Proveedor"})
export class Proveedor{

  @PrimaryGeneratedColumn()
  public id: number; //autogenerado

  @Column()
  public nombre: string;

  @Column()
  public id_comuna: number;

  @Column()
  public contacto: string;

  @Column()
  public telefono: string; 

  @Column()
  public correo_electronico: string;

  @ManyToOne(() => Comunas)
  @JoinColumn({ name: 'id_comuna' })
  comuna: Comunas;

}