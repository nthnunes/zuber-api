import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { CreateDeviceDto } from './dto/create-device.dto';


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
  createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.dispositivosService.createDevice(createDeviceDto);
  }

  @Delete(':id')
  deleteDevice(@Param('id') id: string) {
    return this.dispositivosService.deleteDevice(id);
  }
}
