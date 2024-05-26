import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

interface Message{
  sprintId: string;
  lat: number;
  lon: number
}

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue("queue-event") private queueEventQueue: Queue,
  ) {}

  async handleAddToQueue(Message: Message) {
    this.queueEventQueue.add(
      "geolocation",
      Message,
      {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 3000,
        },
        removeOnComplete: {
          age: 60 * 60, // keep up to 1 hour
          count: 1000, // keep up to 1000 jobs
        },
        removeOnFail: {
          age: 24 * 60 * 60, // keep up to 24 hours
        },
      }
    );
  }
}
