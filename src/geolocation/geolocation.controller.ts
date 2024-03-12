import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { prismaClient } from 'src/database/prismaClient';

interface Message{
    sprintId: string;
    lat: number;
    lon: number
}

@Controller('geolocation')
export class GeolocationController {
    @MessagePattern("geolocation/#")
    async insertLocation(@Payload() data: Message) {
        try {
            const { sprintId, lat, lon } = data;
        
            const sprint = await prismaClient.sprint.findUnique({
              where: {
                id: sprintId,
              },
            });
        
            if (!sprint) {
              console.error(`Corrida ID: '${sprintId}'não encontrada.`);
              return;
            }
        
            const geoLocation = await prismaClient.geoLocation.create({
              data: {
                sprintId,
                lat,
                lon,
              },
            });
        
            console.log(geoLocation);
        
          } catch (error) {
            console.error("Erro no processamento da messagem:", error);
          }
    }
}
