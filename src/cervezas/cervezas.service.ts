import { Inject, Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { IBU } from 'src/enum/amargor';
import { Region } from 'src/enum/regiones';
import { Formato } from 'src/enum/formato';
import { Comuna } from 'src/enum/comunas';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cerveza } from './entities/cerveza.entity';
import { CervezaMapper } from './mapper/cerveza.mapper';
import { TipoCerveza } from 'src/tipos_cerveza/tipos-cervezas.entity';
import { Proveedor } from 'src/Proveedores/entities/proveedores.entity';
import { Amargor } from 'src/Amargor/amargor.entity';


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
        graduacion: createCervezaDto.graduacion
      }
    })
    //agregar tipo, proveedor, amargor
    if(!existe){
      const entidad = CervezaMapper.dtoToEntity(createCervezaDto);
      const tipo_id = await this.TipoCervezaRepository.findOneBy({nombre: createCervezaDto.tipo_cerveza})
      const amargor = await this.AmargorRepository.findOneBy({nivel: createCervezaDto.amargor})
      const proveedor = await this.ProveedorRepository.exists(
        {where: {nombre: createCervezaDto.proveedor.nombre, 
                 id_comuna: createCervezaDto.proveedor.id_comuna}})

    }
  }

  async findAll(nombre: string, marca: string, region: Region, comuna:Comuna, amargor:IBU, graduacion: string, formato: Formato): Promise <Cerveza[]> {
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
      }
    });
    console.log(resultado);
    return resultado;
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
}
