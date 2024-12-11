import { ApiProperty } from "@nestjs/swagger";
import { Amargor } from "src/Amargor/entity/amargor.entity";
import { Formato } from "src/Formato/Formatos.entity";
import { Proveedor } from "src/Proveedores/entities/proveedores.entity";
import { TipoCerveza } from "src/tipos_cerveza/entity/tipos-cervezas.entity";

export class getCerveza {
    @ApiProperty({description:'id de la cerveza'})
    public id: number; 
    @ApiProperty({description:'nombre de la cerveza'})
    public nombre: string;
    @ApiProperty({description:'marca de la cerveza'})
    public marca: string;
    @ApiProperty({description:'id_estilo de la cerveza'})
    public id_tipo: number;
    @ApiProperty({description:'stock de la cerveza'})
    public stock: number;
    @ApiProperty({description:'descripcion de la cerveza'})
    public descripcion: string;
    @ApiProperty({description:'precio de la cerveza'})
    public precio: number;
    @ApiProperty({description:'id_proveedor de la cerveza'})
    public id_proveedor: number;
    @ApiProperty({description:'id_amargor de la cerveza'})
    public id_amargor: string;
    @ApiProperty({description:'graduacion numérica de la cerveza'})
    public graduacion: number;
    @ApiProperty({description:'id_formato de la cerveza'})
    public id_formato: string;
    @ApiProperty({description:'ruta de la imagen de la cerveza'})
    public imagen: string;
    @ApiProperty({description:'bolleano indica si la cerveza está activa'})
    public is_active: boolean;
    @ApiProperty({description:'objeto proveedor de la cerveza'})
    public proveedor: Proveedor;
    @ApiProperty({description:'objeto estilo(tipo) de la cerveza'})
    public tipo: TipoCerveza;
    @ApiProperty({description:'objeto amargor de la cerveza'})
    public amargor: Amargor;
    @ApiProperty({description:'objeto formato de la cerveza'})
    public formato: Formato;
  }
  
  