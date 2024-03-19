import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { prismaClient } from 'src/database/prismaClient';

@WebSocketGateway()
export class WebGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('WebGateway');
  private checkingInterval: NodeJS.Timeout;

  @SubscribeMessage('getSprintGeoLocations')
  async handleGetSprintGeoLocations(client: Socket, sprintId: string): Promise<void> {
    this.checkingInterval = setInterval(async () => {
      try {
        const latestGeoLocation = await prismaClient.geoLocation.findFirst({
          orderBy: {
            time: 'desc'
          }
        });

        if (latestGeoLocation) {
          this.server.emit('sprintGeoLocations', latestGeoLocation);
          this.logger.log(`Sent latest geoLocation to clients.`);
        }
      } catch (error) {
        this.logger.error(`Erro ao buscar a última geolocalização: ${error}`);
      }
    }, 5000);
  }

  stopCheckingGeoLocations() {
    clearInterval(this.checkingInterval);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
