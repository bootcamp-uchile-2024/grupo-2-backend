import { ApiProperty } from "@nestjs/swagger";
import { IBU } from "src/enum/amargor";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Proveedor } from "src/Proveedores/entities/proveedores.entity";
import { TipoCerveza } from "src/tipos_cerveza/tipos-cervezas.entity";
import { Amargor } from "src/Amargor/amargor.entity";
import { Formato } from "src/Formato/Formatos.entity";

@Entity({name: "Cerveza"})
export class Cerveza {

  @ApiProperty({ default: 1, description: 'ID único de la cerveza' })
  @PrimaryColumn()
  public id: number; //autogenerado
  @ApiProperty({ default: 'Torobayo', description: 'Nombre de la cerveza' })
  @Column()
  public nombre: string;
  @ApiProperty({ default: 'Kuntsmann', description: 'Marca de la cerveza' })
  @Column()
  public marca: string;
  @ApiProperty({description: 'id del tipo de la cerveza'})
  @Column({name: 'id_tipo'})
  public id_tipo: number;
  @ApiProperty({ default: 100, description: 'Stock de la cerveza' })
  @Column()
  public stock: number;
  @ApiProperty({ default: 'Tiene un perfil de sabor equilibrado con notas de lúpulo fresco y un toque de caramelo, color es dorado brillante y amargor moderado que complementa su sabor maltoso', description: 'Descripción de la cerveza' })
  @Column()
  public descripcion: string;
  @ApiProperty({ default: 1000, description: 'Precio de la cerveza' })
  @Column()
  public precio: number;
  @ApiProperty({ default: 'CCU', description: 'Nombre Proveedor de la cerveza' })
  @Column({name: 'id_proveedor'})
  public id_proveedor: number;
  @ApiProperty({ default: 'Moderado', description: 'Amargor de la cerveza' })
  @Column({name: 'id_amargor'})
  public id_amargor: number;
  @ApiProperty({ default: '5%', description: 'Graduación de la cerveza' })
  @Column()
  public graduacion: string;
  @ApiProperty({ default: 'Botella', description: 'Formato de la cerveza' })
  @Column({name: 'id_formato'})
  public id_formato: Formato;
  @ApiProperty({ default: 'https://placehold.co/400x600', description: 'Imagen de la cerveza' })
  @Column()
  public imagen: string;

  @ManyToOne(() => Proveedor)
  @JoinColumn({ name: 'id_proveedor' })
  proveedor: Proveedor;

  @ManyToOne(() => TipoCerveza )
  @JoinColumn({ name: 'id_tipo' })
  tipo: TipoCerveza;

  @ManyToOne(() => Amargor )
  @JoinColumn({ name: 'id_amargor' })
  amargor: Amargor;

  @ManyToOne(() => Formato )
  @JoinColumn({ name: 'id_formato' })
  formato: Formato;
}

