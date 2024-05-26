import { Injectable } from '@nestjs/common';
import { QueueService } from 'src/queue/queue.service';

interface Message{
    sprintId: string;
    lat: number;
    lon: number
}

@Injectable()
export class GeolocationService {
  constructor(
    private readonly QueueService: QueueService
  ) {}
    async insertLocation(data: Message) {
        this.QueueService.handleAddToQueue(data);
    }
}
