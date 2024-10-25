import { Region } from "src/Region/regiones.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "Comuna"})
export class Comuna{

  @PrimaryColumn()
  public id: number; //autogenerado

  @Column()
  public nombre: string;

  @Column()
  public id_region: string;

  @ManyToOne(() => Region)
  @JoinColumn({name: 'id_region'})
  region : Region;
}