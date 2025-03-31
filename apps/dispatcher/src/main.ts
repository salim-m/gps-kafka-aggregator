import { NestFactory } from '@nestjs/core';
import { DispatcherModule } from './dispatcher.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DispatcherModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
