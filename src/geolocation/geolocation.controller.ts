import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GeolocationService } from './geolocation.service';


@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geoLocationService: GeolocationService) {}

    @MessagePattern("geolocation/#")
    insertLocation(@Payload() data){
      this.geoLocationService.insertLocation(data);
    }
}
