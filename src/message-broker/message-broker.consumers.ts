import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  MessageBrokerEmitIdentifier,
  MessageBrokerParams,
} from 'src/interfaces/message-broker.service.interface';

@Controller('message-broker')
export class MessageBrokerConsumers {
  @EventPattern<MessageBrokerEmitIdentifier>('ORDER_PLACE')
  orderPlacedLogger(@Payload() payload: MessageBrokerParams['ORDER_PLACE']) {
    console.log(`
      Received order of user - ${payload.order.email}
      > ${payload.order.productName} x${payload.order.quantity}
    `);
  }

  @EventPattern<MessageBrokerEmitIdentifier>('ORDER_PLACE')
  orderPlacedSendEmail(@Payload() payload: MessageBrokerParams['ORDER_PLACE']) {
    console.log(`
      Sending email to '${payload.order.email}' ...
    `);
  }
}
