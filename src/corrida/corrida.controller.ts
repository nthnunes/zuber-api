import { Controller, Get, Param, Post } from '@nestjs/common';
import { CorridaService } from './corrida.service';

@Controller('corrida')
export class CorridaController {
    constructor(private readonly corridaService: CorridaService) {}

    @Get(':deviceId')
    findSprints(@Param('deviceId') deviceId: string) {
        return this.corridaService.findSprints(deviceId);
    }

    @Post(':deviceId')
    createSprint(@Param('deviceId') deviceId: string) {
        return this.corridaService.createSprint(deviceId);
    }
}
