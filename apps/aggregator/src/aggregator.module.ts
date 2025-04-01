import { Module } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DISPATCHER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          producerOnlyMode: true,
          client: { brokers: ['broker:9092'] },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [EventsGateway],
})
export class AggregatorModule {}
