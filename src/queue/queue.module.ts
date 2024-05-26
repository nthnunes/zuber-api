import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";

import { QueueService } from "./queue.service";
import { QueueEventConsumer } from "./queue.consumer";

@Module({
  imports: [BullModule.registerQueueAsync({ name: "queue-event" }),],
  providers: [QueueService, QueueEventConsumer],
  exports: [QueueService],
})
export class QueueModule {}
