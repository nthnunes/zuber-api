import { Module } from '@nestjs/common';
import { CorridaController } from './corrida.controller';
import { CorridaService } from './corrida.service';

@Module({
    controllers: [CorridaController],
    providers: [CorridaService]
})
export class CorridaModule {}
