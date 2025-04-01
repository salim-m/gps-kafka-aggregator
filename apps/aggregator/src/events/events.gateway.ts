import { Inject, Logger } from '@nestjs/common';
import { ClientKafkaProxy } from '@nestjs/microservices';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly LOG = new Logger(EventsGateway.name);

  constructor(
    @Inject('DISPATCHER_SERVICE')
    private readonly client: ClientKafkaProxy,
  ) {}

  handleConnection(client: Socket) {
    this.LOG.log(`Client id: ${client.id} connected`);
  }

  handleDisconnect(client: Socket) {
    this.LOG.log(`Client id: ${client.id} disconnected`);
  }

  @SubscribeMessage('events')
  async handleMessage(@MessageBody() data: unknown) {
    this.LOG.debug('Sending: ' + data);
    return this.client.emit('coordinates', data);
  }
}
