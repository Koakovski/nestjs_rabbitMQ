import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { MessageBrokerModule } from './message-broker/message-broker.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MessageBrokerModule, OrderModule, ProductModule],
})
export class AppModule {}
