import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositivosController } from './dispositivos/dispositivos.controller';
import { DispositivosService } from './dispositivos/dispositivos.service';

@Module({
  imports: [],
  controllers: [AppController, DispositivosController],
  providers: [AppService, DispositivosService],
})
export class AppModule {}
