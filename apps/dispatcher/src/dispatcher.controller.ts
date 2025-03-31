import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class DispatcherController {
  private readonly LOG = new Logger(DispatcherController.name);

  @MessagePattern('tacking.coordinates')
  logCoordinates(data: unknown) {
    this.LOG.log(`Received message: ${data}`);
  }
}
