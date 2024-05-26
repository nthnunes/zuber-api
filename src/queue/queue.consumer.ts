import {
  Process,
  Processor,
} from "@nestjs/bull";
import { Job } from "bull";

import { prismaClient } from "src/database/prismaClient";

interface Message{
  sprintId: string;
  lat: number;
  lon: number
}

@Processor("queue-event")
export class QueueEventConsumer {
  @Process("geolocation")
  async handleGeolocationCreate(job: Job<Message>) {
    const event = job.data;
  
    try {
      const { sprintId, lat, lon } = event;
  
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
  
      //console.log(geoLocation);
  
    } catch (error) {
      console.error("Erro no processamento da messagem:", error);
    }
  }
}
