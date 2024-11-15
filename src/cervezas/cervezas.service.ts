import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Cerveza } from './entities/cerveza.entity';
import { CervezaMapper } from './mapper/cerveza.mapper';
import { TipoCerveza } from 'src/tipos_cerveza/tipos-cervezas.entity';
import { Proveedor } from 'src/Proveedores/entities/proveedores.entity';
import { Amargor } from 'src/Amargor/amargor.entity';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { getCerveza } from './dto/create-cerveza.dto copy';


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

  async findAll(pagina: number, cantproductos: number): Promise <getCerveza[]> {
    const salto = (pagina - 1) * cantproductos;
    const resultado: Cerveza[] = await this.CervezaRepository.find({
      select:{
        id: true,
        nombre: true,
        marca: true,
        stock: true,
        descripcion: true,
        precio: true,
        graduacion: true,
        imagen: true,
      },
      relations:{
        proveedor: true,
        tipo: true,
        amargor: true,
        formato: true
      },
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

    return resultado;
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
      console.log(entidad);
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
      await this.CervezaRepository.delete(id)
      return `Se eliminó la cerveza con ID ${id}`;
    }else{
      throw new HttpException('La cerveza que intenta eliminar no existe', HttpStatus.BAD_REQUEST);
    }
  }


}
