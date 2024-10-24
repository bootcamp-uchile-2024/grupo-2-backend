import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Formato"})
export class Formato{

  @ApiProperty({description: 'ID y nombre único del formato' })
  @PrimaryColumn()
  public id: string;

  @ApiProperty({description: 'descripcion del formato'})
  @Column()
  public descripcion: string;
}