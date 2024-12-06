import { ApiProperty } from "@nestjs/swagger";
import { Collection, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Region"})
export class Region{

  @PrimaryColumn()
  public id: string;

  @Column()
  public nombre: string;

  @Column()
  public zona_id: number;
}