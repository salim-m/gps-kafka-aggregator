import { Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class DispatcherController {
  private readonly LOG = new Logger(DispatcherController.name);

  @EventPattern('coordinates')
  async logCoordinates(data: Record<string, any>) {
    this.LOG.log(`Received message: ${data}`);
  }
}
