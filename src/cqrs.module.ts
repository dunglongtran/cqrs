import { Module, Query } from '@nestjs/common';
import { QueryBus } from './query-bus';
import { CommandBus } from './command-bus';
import { EventPublisher } from './event-publisher';
import { EventBus } from './event-bus';

@Module({
  providers: [QueryBus, CommandBus, EventBus, EventPublisher],
  exports: [QueryBus, CommandBus, EventBus, EventPublisher],
})
export class CQRSModule {}
