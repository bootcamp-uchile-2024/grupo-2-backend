import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/Region/regiones.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "Comuna"})
export class Comuna{

  @ApiProperty({description: 'ID único de la comuna' })
  @PrimaryColumn()
  public id: number; //autogenerado

  @ApiProperty({description: 'nombre de la comuna'})
  @Column()
  public nombre: string;

  @ApiProperty({description: 'id de la región a la que pertenece'})
  @Column()
  public id_region: string;

  @ManyToOne(() => Region)
  @JoinColumn({name: 'id_region'})
  region : Region;
}