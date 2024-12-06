import { Module } from '@nestjs/common';
import { AmargorService } from './amargor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmargorController } from './amargor.controller';
import { Amargor } from './entity/amargor.entity';

@Module({
  controllers: [AmargorController],
  providers: [AmargorService],
  imports: [TypeOrmModule.forFeature([Amargor])]
})
export class AmargorModule {}
