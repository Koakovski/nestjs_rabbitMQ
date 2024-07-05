import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  MessageBrokerEmitIdentifier,
  MessageBrokerParams,
} from 'src/interfaces/message-broker.service.interface';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@Controller('message-broker')
export class MessageBrokerConsumers {
  @EventPattern<MessageBrokerEmitIdentifier>('ORDER_PLACE')
  async orderPlacedLogger(
    @Payload() payload: MessageBrokerParams['ORDER_PLACE'],
  ) {
    console.log('[ORDER_PLACED_LOGGER]');
    console.log(`
      Received order of user - ${payload.order.email}
      > ${payload.order.productName} x${payload.order.quantity}
      date - ${new Date().toISOString()}
    `);
    console.log('__________________________________');
    await delay(5000);
  }

  @EventPattern<MessageBrokerEmitIdentifier>('ORDER_PLACE')
  async orderPlacedSendEmail(
    @Payload() payload: MessageBrokerParams['ORDER_PLACE'],
  ) {
    console.log('[ORDER_PLACED_MAILER]');
    console.log(`
      Sending email to '${payload.order.email}' ...
      date - ${new Date().toISOString()}
    `);
    console.log('__________________________________');
    await delay(2000);
  }

  @EventPattern<MessageBrokerEmitIdentifier>('PRODUCT_CREATED')
  async productCreatedLogger(
    @Payload() payload: MessageBrokerParams['PRODUCT_CREATED'],
  ) {
    console.log('[PRODUCT_CREATED_LOGGER]');
    console.log(`
      New Product '${payload.product.name} - R$ ${
        payload.product.price
      }' created
      date - ${new Date().toISOString()}
      `);
    console.log('__________________________________');
    await delay(3000);
  }
}
