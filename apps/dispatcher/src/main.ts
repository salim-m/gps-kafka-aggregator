import { NestFactory } from '@nestjs/core';
import { DispatcherModule } from './dispatcher.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DispatcherModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: { brokers: ['broker:9092'] },
        consumer: {
          groupId: 'dispatcher-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
