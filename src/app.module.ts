import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterJugModule } from './water-jug/water-jug.module';

@Module({
  imports: [WaterJugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
