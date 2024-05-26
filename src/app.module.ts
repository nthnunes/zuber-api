import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { CorridaController } from './corrida/corrida.controller';
import { CorridaService } from './corrida/corrida.service';
import { CorridaModule } from './corrida/corrida.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import { WebGateway } from './web/web.gateway';
import { LoggingMiddleware } from './common/logging.middleware';

@Module({
  imports: [DispositivosModule, CorridaModule, GeolocationModule],
  controllers: [AppController, CorridaController],
  providers: [AppService, CorridaService, WebGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');  // Aplica o middleware para todas as rotas
  }
}
