import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GeolocationController } from './geolocation.controller';
import { GeolocationService } from './geolocation.service';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'zuber-broker',
          transport: Transport.MQTT,
          options: {
            url: 'mqtt://localhost:1883',
          }
        },
      ]),
    ],
    controllers: [GeolocationController],
    providers: [GeolocationService]
  })
export class GeolocationModule {}
