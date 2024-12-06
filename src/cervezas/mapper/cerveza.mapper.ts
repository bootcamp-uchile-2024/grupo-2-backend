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
        cerveza.descripcion = entidad.descripcion;
        cerveza.graduacion = entidad.graduacion;
        cerveza.imagen = entidad.imagen;
        cerveza.stock = entidad.stock;
        cerveza.formato = entidad.formato.id;
        cerveza.precio = entidad.precio;
        cerveza.is_active = entidad.is_active;
        return cerveza;
    }
}