import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GeolocationController } from './geolocation.controller';

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
    controllers: [GeolocationController]
  })
export class GeolocationModule {}
