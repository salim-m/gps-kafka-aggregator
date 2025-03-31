import { Module } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DISPATCHER_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [],
  providers: [EventsGateway],
})
export class AggregatorModule {}
