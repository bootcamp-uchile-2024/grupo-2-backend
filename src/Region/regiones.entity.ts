import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Region"})
export class Region{

  @PrimaryColumn()
  public id: string;

  @Column()
  public nombre: string;
}