import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';


@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) {}

  @Get()
  findAll() {
    return this.dispositivosService.findAll();
  }

  @Get(':id')
  findDevice(@Param('id') id: string) {
    return this.dispositivosService.findDevice(id);
  }

  @Post()
  createDevice(@Body() body) {
    return this.dispositivosService.createDevice(body);
  }

  @Delete(':id')
  deleteDevice(@Param('id') id: string) {
    return this.dispositivosService.deleteDevice(id);
  }
}
