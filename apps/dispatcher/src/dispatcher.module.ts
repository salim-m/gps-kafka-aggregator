import { Module } from '@nestjs/common';
import { DispatcherController } from './dispatcher.controller';

@Module({
  imports: [],
  controllers: [DispatcherController],
  providers: [],
})
export class DispatcherModule {}
