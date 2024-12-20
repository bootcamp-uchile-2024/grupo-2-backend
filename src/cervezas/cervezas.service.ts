import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCervezaDto, estado } from './dto/create-cerveza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, LessThan, Like, MoreThan, Repository } from 'typeorm';
import { Cerveza } from './entities/cerveza.entity';
import { CervezaMapper } from './mapper/cerveza.mapper';
import { TipoCerveza } from 'src/tipos_cerveza/entity/tipos-cervezas.entity';
import { Proveedor } from 'src/Proveedores/entities/proveedores.entity';
import { Amargor } from 'src/Amargor/entity/amargor.entity';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { getCerveza } from './dto/getCerveza.dto';
import { promises as FS} from 'fs';


@Injectable()
export class CervezasService {
  private cervezas = [];

  constructor(@InjectRepository(Cerveza) private readonly CervezaRepository: Repository<Cerveza>,
              @InjectRepository(TipoCerveza) private readonly TipoCervezaRepository: Repository<TipoCerveza>,
              @InjectRepository(Proveedor) private readonly ProveedorRepository: Repository<Proveedor>,
              @InjectRepository(Amargor) private readonly AmargorRepository: Repository<Amargor>) {}

  async create(createCervezaDto: CreateCervezaDto) {
    const existe = await this.CervezaRepository.exists({
      where: {
        nombre: createCervezaDto.nombre,
        marca: createCervezaDto.marca,
        graduacion: createCervezaDto.graduacion,
        id_formato: createCervezaDto.formato
      }
    })

    if(!existe){
      const entidad = CervezaMapper.dtoToEntity(createCervezaDto);
      const tipo_id = await this.TipoCervezaRepository.findOneBy({nombre: createCervezaDto.tipo_cerveza});
      entidad.id_tipo = tipo_id.id;
      const amargor = await this.AmargorRepository.findOneBy({nivel: createCervezaDto.amargor});
      entidad.id_amargor = amargor.id;
      const proveedor = await this.ProveedorRepository.findOne(
        {where: {nombre: createCervezaDto.proveedor.nombre, 
                 id_comuna: createCervezaDto.proveedor.id_comuna}})
      if(proveedor){
        entidad.id_proveedor = proveedor.id;
      }else{
        const guardar_proveedor = await this.ProveedorRepository.save(createCervezaDto.proveedor);
        entidad.id_proveedor = guardar_proveedor.id;
      }
      const guardar_cerveza = await this.CervezaRepository.save(entidad);
      return guardar_cerveza;
    }else{
      throw new HttpException('La cerveza que se intenta crear ya existe', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(pagina: number, cantproductos: number, f_amargor: string[], f_estilo: number[],
    f_categoria:number[], f_grados: number, f_color: number[], f_origen: string[], f_buscar: string): Promise <getCerveza[]>{
    
    const salto = (pagina - 1) * cantproductos;

    
    let where_y: any = {};
    if(f_amargor){
      where_y.id_amargor = In(f_amargor);
    };
    if(f_grados){
      if(f_grados == 1){
        where_y.graduacion = LessThan(5.0);
      }else if(f_grados == 3){
        where_y.graduacion = MoreThan(7.0);
      }else{
        where_y.graduacion = Between(4.9, 7.1);
      }
    };
    if(f_origen){
      where_y.proveedor = { comuna:{ region:{zona_id: In(f_origen)} } };
    };
    if(f_estilo || f_categoria || f_color){
      where_y.tipo = [];
    };
  
    if(f_estilo){
      where_y.tipo.push({id: In(f_estilo)});
    };
    if(f_categoria){
      where_y.tipo.push({categoria_id: In(f_categoria)});
    };
    
    if(f_color){
      where_y.tipo.push({color_id: In(f_color)});
    };

    if(f_buscar){
      where_y = [
        { ...where_y, nombre: Like(`%${f_buscar}%`) },
        { ...where_y, marca: Like(`%${f_buscar}%`) }
      ];
    }

    const resultado: Cerveza[] = await this.CervezaRepository.find({
      relations:{
        proveedor: true,
        tipo: true,
        amargor: true,
        formato: true
      },
      where: where_y,
      take: cantproductos,
      skip: salto
    });

    const resultadoDto = resultado.map((entidad) => CervezaMapper.entityToDto(entidad));
    return resultadoDto;
  }

  async findOne(id_entrada: number): Promise<Cerveza> {
    const resultado: Cerveza = await this.CervezaRepository.findOne({
      where:{
        id: id_entrada},
      relations:{
          proveedor: true,
          tipo: true,
          amargor: true,
          formato: true
        }
    })
    const resultadoDto = CervezaMapper.entityToDto(resultado);
    return resultadoDto;
  }

  async update(id: number, updateCervezaDto: UpdateCervezaDto) {
    const existe = await this.CervezaRepository.exists({
      where: {
        id: id
      }
    })

    if(existe){
      const entidad = CervezaMapper.dtoToEntity(updateCervezaDto);
      const tipo_id = await this.TipoCervezaRepository.findOneBy({nombre: updateCervezaDto.tipo_cerveza});
    
      entidad.id_tipo = tipo_id.id;
      const amargor = await this.AmargorRepository.findOneBy({nivel: updateCervezaDto.amargor});
      entidad.id_amargor = amargor.id;
      const proveedor = await this.ProveedorRepository.findOne(
        {where: {nombre: Like(updateCervezaDto.proveedor.nombre), 
                 id_comuna: updateCervezaDto.proveedor.id_comuna,
                 correo_electronico: updateCervezaDto.proveedor.correo_electronico}})
      if(proveedor){
        entidad.id_proveedor = proveedor.id;
      }else{
        const guardar_proveedor = await this.ProveedorRepository.save(updateCervezaDto.proveedor);
        entidad.id_proveedor = guardar_proveedor.id;
      }
      const guardar_cerveza = await this.CervezaRepository.update(id, entidad);
      return updateCervezaDto;
    }else{
      throw new HttpException('La cerveza que se intenta actualizar no existe', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    const existe = await this.CervezaRepository.exists({
      where: {
        id: id
      }
    })
    if(existe){
      const cerverza = await this.CervezaRepository.findOneBy({id: id})
      await FS.rm(cerverza.imagen);
      await this.CervezaRepository.delete(id)
      return `Se eliminó la cerveza con ID ${id}`;
    }else{
      throw new HttpException('La cerveza que intenta eliminar no existe', HttpStatus.BAD_REQUEST);
    }
  }

  async cargarImagenCerveza(id: number, file: Express.Multer.File): Promise<string> {
    const ruta = './imagenes-cervezas'
    const extension = file.originalname.split('.')[1];
    const ruta_imagen = `${ruta}/${id}.${extension}`;

    try{
      await FS.writeFile(ruta_imagen, file.buffer);
      await this.CervezaRepository.update(id, {imagen: ruta_imagen});
    }catch {
      throw new HttpException('La imagen no pudo ser cargada', HttpStatus.BAD_REQUEST);
    };

    return 'Imagen cargada exitosamente';
  }

  async actualizarImagenCerveza(id: number, file: Express.Multer.File): Promise<string> {
    const ruta = './imagenes-cervezas'
    const extension = file.originalname.split('.')[1];
    const nueva_ruta_imagen = `${ruta}/${id}.${extension}`;
    const cerveza = await this.CervezaRepository.findOneBy({id: id});
    if(cerveza){
      const ruta_imagen = cerveza.imagen;
      try{
        await FS.rm(ruta_imagen);
        await FS.writeFile(nueva_ruta_imagen, file.buffer);
        await this.CervezaRepository.update(id, {imagen: nueva_ruta_imagen});
      }catch {
        throw new HttpException('La imagen no pudo ser actualizada', HttpStatus.BAD_REQUEST);
      }
    }else{
      throw new HttpException('El id de cerveza ingresado no existe', HttpStatus.BAD_REQUEST);
    }
    return '';
  }

  async eliminarImagenCerveza(id: number): Promise<string> {
    const ruta = './imagenes-cervezas'
    const cerveza = await this.CervezaRepository.findOneBy({id: id});
    if(cerveza){
      const ruta_imagen = cerveza.imagen;
      try{
        await FS.rm(ruta_imagen);
        await this.CervezaRepository.update(id, {imagen: null});
      }catch {
        throw new HttpException('La imagen no pudo ser eliminada', HttpStatus.BAD_REQUEST);
      }
    }else{
      throw new HttpException('El id de cerveza ingresado no existe', HttpStatus.BAD_REQUEST);
    }
    return '';
  }

  async actualizarEstado(id: number, estado: estado) {
    const existe = await this.CervezaRepository.exists({
      where: {
        id: id
      }
    })

    if(existe){
      const guardar_cerveza = await this.CervezaRepository.update(id, {is_active: estado.is_active});
      return  `Cerveza actualizada. Estado is_active = ${estado.is_active}`;
    }else{
      throw new HttpException('La cerveza que se intenta actualizar no existe', HttpStatus.BAD_REQUEST);
    }
  }

  async actualizarStock(id: number, cantidad: number){
    const existe = await this.CervezaRepository.exists({
      where: {
        id: id
      }
    })

    if(existe){
      const cerveza = await this.CervezaRepository.findOneBy({id: id});
      let nuevo_stock = cerveza.stock - cantidad;      
      if(nuevo_stock >= 0){
        const guardar_cerveza = await this.CervezaRepository.update(id, {stock: nuevo_stock});
        return  `Cerveza actualizada. Estado stock = ${nuevo_stock}`;
      }else{
        throw new HttpException('La cerveza que se intenta actualizar no tiene stock suficiente', HttpStatus.BAD_REQUEST);
      }
    }else{
      throw new HttpException('La cerveza que se intenta actualizar no existe', HttpStatus.BAD_REQUEST);
    }
  }

}
