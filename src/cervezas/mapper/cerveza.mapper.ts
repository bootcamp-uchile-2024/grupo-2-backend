import { CreateCervezaDto } from "../dto/create-cerveza.dto";
import { getCerveza } from "../dto/create-cerveza.dto copy";
import { Cerveza } from "../entities/cerveza.entity";

export class CervezaMapper{
    static dtoToEntity(dto: CreateCervezaDto): Cerveza{
        const cerveza = new Cerveza();
        cerveza.nombre = dto.nombre;
        cerveza.marca = dto.marca;
        cerveza.descripcion = dto.descripcion;
        const graduacion = Number(dto.graduacion);
        cerveza.graduacion = graduacion;
        cerveza.imagen = dto.imagen;
        cerveza.stock = dto.stock;
        cerveza.id_formato = dto.formato;
        cerveza.precio = dto.precio;
        return cerveza;
    }

    static entityToDto(dto: Cerveza): getCerveza{
        const cerveza = new getCerveza();
        cerveza.nombre = dto.nombre;
        cerveza.marca = dto.marca;
        cerveza.descripcion = dto.descripcion;
        cerveza.graduacion = dto.graduacion;
        cerveza.imagen = dto.imagen;
        cerveza.stock = dto.stock;
        cerveza.formato = dto.formato.id;
        cerveza.precio = dto.precio;
        return cerveza;
    }
}