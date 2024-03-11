import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class CorridaService {
    async findSprints(deviceId: string) {
        const sprints = await prismaClient.sprint.findMany({
            where: {
                deviceId: deviceId,
            },
        });

        return sprints;
    }

    async createSprint(deviceId: string) {

        const device = await prismaClient.device.findUnique({
            where: {
                id: deviceId,
            },
        });

        if (!device) {
            throw new HttpException(
                `Não é possível criar uma corrida para o dispositivo ID: '${deviceId}' pois ele não existe.`,
                HttpStatus.NOT_FOUND
            );
        } else {
            const sprint = await prismaClient.sprint.create({
                data: {
                    deviceId
                }
            });
    
            return sprint;
        }
    }
}
