import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorController } from './color.controller';
import { Color } from './entity/color.entity';

@Module({
  controllers: [ColorController],
  providers: [ColorService],
  imports: [TypeOrmModule.forFeature([Color])]
})
export class ColorModule {}
