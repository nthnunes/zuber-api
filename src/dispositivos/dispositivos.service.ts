import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dispositivo } from './entities/dispositivo.entity';

@Injectable()
export class DispositivosService {
    private dispositivos: Dispositivo[] = [
        {
            id: "xpto",
            nome: "Celular teste"
        }
    ];

    findAll() {
        return this.dispositivos;
    }

    findDevice(id: string) {
        const dispositivo = this.dispositivos.find(
            (dispositivo: Dispositivo) => dispositivo.id === id
        );

        if (!dispositivo) {
            throw new HttpException(
                `Dispositivo ${id} não encontrado.`,
                HttpStatus.NOT_FOUND
            );
        }
    }

    createDevice(createDeviceDto: any) {
        this.dispositivos.push(createDeviceDto);
    }

    deleteDevice(id: string) {
        const indexDispositivo = this.dispositivos.findIndex(
            (dispositivo: Dispositivo) => dispositivo.id === id
        );

        if (indexDispositivo >= 0) {
            this.dispositivos.splice(indexDispositivo, 1);
        }
    }
}
