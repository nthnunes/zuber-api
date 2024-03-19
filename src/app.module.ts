import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { CorridaController } from './corrida/corrida.controller';
import { CorridaService } from './corrida/corrida.service';
import { CorridaModule } from './corrida/corrida.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import { WebGateway } from './web/web.gateway';

@Module({
  imports: [DispositivosModule, CorridaModule, GeolocationModule],
  controllers: [AppController, CorridaController],
  providers: [AppService, CorridaService, WebGateway],
})
export class AppModule {}
