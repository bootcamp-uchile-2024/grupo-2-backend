import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Region"})
export class Region{

  @ApiProperty({description: 'ID único de la region' })
  @PrimaryColumn()
  public id: string;

  @ApiProperty({description: 'nombre de la region'})
  @Column()
  public nombre: string;
}