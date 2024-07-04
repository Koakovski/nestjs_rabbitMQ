import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { MessageBrokerModule } from './message-broker/message-broker.module';

@Module({
  imports: [MessageBrokerModule, OrderModule],
})
export class AppModule {}
