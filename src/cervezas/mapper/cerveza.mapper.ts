import { CreateCervezaDto } from "../dto/create-cerveza.dto";
import { getCerveza } from "../dto/getCerveza.dto";
import { Cerveza } from "../entities/cerveza.entity";

export class CervezaMapper{
    static dtoToEntity(dto: CreateCervezaDto): Cerveza{
        const cerveza = new Cerveza();
        cerveza.nombre = dto.nombre;
        cerveza.marca = dto.marca;
        cerveza.descripcion = dto.descripcion;
        const graduacion = Number(dto.graduacion);
        cerveza.graduacion = graduacion;
        cerveza.stock = dto.stock;
        cerveza.id_formato = dto.formato;
        cerveza.precio = dto.precio;
        cerveza.is_active = dto.is_active;
        return cerveza;
    }

    static entityToDto(entidad: Cerveza): getCerveza{
        const cerveza = new getCerveza();
        cerveza.id = entidad.id;
        cerveza.nombre = entidad.nombre;
        cerveza.marca = entidad.marca;
        cerveza.id_tipo = entidad.id_tipo;
        cerveza.stock = entidad.stock;
        cerveza.descripcion = entidad.descripcion;
        cerveza.precio = entidad.precio;
        cerveza.id_proveedor = entidad.id_proveedor;
        cerveza.id_amargor = entidad.id_amargor;
        cerveza.graduacion = entidad.graduacion;
        cerveza.id_formato = entidad.id_formato;
        cerveza.imagen = entidad.imagen;
        cerveza.is_active = entidad.is_active;
        cerveza.proveedor = entidad.proveedor;
        cerveza.formato = entidad.formato;
        cerveza.tipo = entidad.tipo;
        cerveza.amargor = entidad.amargor;
        return cerveza;
    }
}