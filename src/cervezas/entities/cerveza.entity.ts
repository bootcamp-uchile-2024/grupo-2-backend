import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Proveedor } from "src/Proveedores/entities/proveedores.entity";
import { TipoCerveza } from "src/tipos_cerveza/tipos-cervezas.entity";
import { Amargor } from "src/Amargor/amargor.entity";
import { Formato } from "src/Formato/Formatos.entity";

@Entity({name: "Cerveza"})
export class Cerveza {

  @PrimaryGeneratedColumn()
  public id: number; //autogenerado
  
  @Column()
  public nombre: string;
  
  @Column()
  public marca: string;
  
  @Column({name: 'id_tipo'})
  public id_tipo: number;
  
  @Column()
  public stock: number;
  
  @Column()
  public descripcion: string;
  
  @Column()
  public precio: number;
  
  @Column({name: 'id_proveedor'})
  public id_proveedor: number;
  
  @Column({name: 'id_amargor'})
  public id_amargor: number;
  
  @Column()
  public graduacion: string;
  
  @Column({name: 'id_formato'})
  public id_formato: string;
  
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

