import { ApiProperty } from "@nestjs/swagger";
import { Comuna } from "src/Comunas/comunas.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: "Proveedor"})
export class Proveedor{

  @ApiProperty({description: 'ID único del proveedor' })
  @PrimaryColumn()
  public id: number; //autogenerado

  @ApiProperty({description: 'nombre de la empresa proveedora'})
  @Column()
  public nombre: string;

  @ApiProperty({description: 'id comuna a la que pertenece'})
  @Column()
  public id_comuna: number;

  @ApiProperty({description: 'nombre del contacto del proveedor'})
  @Column()
  public contacto: string;

  @ApiProperty({description: 'numero de telefono del proveedor'})
  @Column()
  public telefono: string; 

  @ApiProperty({description: 'correo electronico de contacto del proveedor'})
  @Column()
  public correo_electronico: string;

  @ManyToOne(() => Comuna)
  @JoinColumn({ name: 'id_comuna' })
  comuna: Comuna;

}