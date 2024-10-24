import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Amargor"})
export class Amargor{

  @ApiProperty({description: 'ID y nombre único del amargor' })
  @PrimaryColumn()
  public id: string;

  @ApiProperty({description: 'nivel del amargor'})
  @Column()
  public nivel: string;

  @ApiProperty({description: 'descripcion del amargor'})
  @Column()
  public descripcion: string;
}