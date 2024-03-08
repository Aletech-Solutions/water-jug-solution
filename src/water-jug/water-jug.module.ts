import { Module } from '@nestjs/common';
import { WaterJugService } from './water-jug.service';
import { WaterJugController } from './water-jug.controller';

@Module({
  providers: [WaterJugService],
  controllers: [WaterJugController]
})
export class WaterJugModule {}
