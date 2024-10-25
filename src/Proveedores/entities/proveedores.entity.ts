import { ApiProperty } from "@nestjs/swagger";
import { Comuna } from "src/Comunas/comunas.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "Proveedor"})
export class Proveedor{

  @PrimaryColumn()
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

  @ManyToOne(() => Comuna)
  @JoinColumn({ name: 'id_comuna' })
  comuna: Comuna;

}