import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class DispositivosService {
    async findAll() {
        const devices = await prismaClient.device.findMany({
            orderBy: {
                created_at: 'asc'
            }
        });

        return devices;
    }

    async findDevice(id: string) {
        const device = await prismaClient.device.findUnique({
            where: {
                id: id,
            },
        });

        if (!device) {
            throw new HttpException(
                `Dispositivo ID: '${id}' não encontrado.`,
                HttpStatus.NOT_FOUND
            );
        } else {
            return device;
        }
    }

    async createDevice(createDeviceDto: any) {
        const nome = createDeviceDto.nome;

        const temp = await prismaClient.device.findFirst({
            where: {
                nome : nome
            },
        });

        if (temp) {
            throw new HttpException(
                `Dispositivo '${nome}' já existe.`,
                HttpStatus.CONFLICT
            );
        } else {
            const device = await prismaClient.device.create({
                data: {
                    nome
                }
            });
    
            return device;
        }
    }

    async deleteDevice(id: string) {
        const device = await prismaClient.device.findUnique({
            where: {
                id: id,
            },
        });

        if (!device) {
            throw new HttpException(
                `Dispositivo ID: '${id}' não encontrado.`,
                HttpStatus.NOT_FOUND
            );
        }

        await prismaClient.device.delete({
            where: {
                id: id
            }
        })
    }
}
