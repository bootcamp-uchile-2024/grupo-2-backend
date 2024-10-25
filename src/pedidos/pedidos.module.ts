import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { DireccionesModule } from 'src/Datos_Envio/direcciones.module';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports: [DireccionesModule]
})
export class PedidosModule {}
