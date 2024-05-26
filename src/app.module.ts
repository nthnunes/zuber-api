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
import { QueueModule } from './queue/queue.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [DispositivosModule, CorridaModule, GeolocationModule, BullModule.forRoot({
    redis: {
      host: "localhost",
      port: Number(6379),
      password: "tSYZECYZyyag0BHqYy8yY"
    },
  }), QueueModule],
  controllers: [AppController, CorridaController],
  providers: [AppService, CorridaService, WebGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');
  }
}
