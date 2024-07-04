import { Inject, Injectable } from '@nestjs/common';
import { RabbitMqConnectionName } from './rabbit-mq.constants';
import { ClientProxy } from '@nestjs/microservices';
import {
  IMessageBrokerService,
  MessageBrokerEmitIdentifier,
  MessageBrokerParams,
} from '../../interfaces/message-broker.service.interface';

@Injectable()
export class RabbitMqMessageBrokerService implements IMessageBrokerService {
  constructor(
    @Inject(RabbitMqConnectionName) private rabbitMqClient: ClientProxy,
  ) {}

  emmit<E extends MessageBrokerEmitIdentifier>(
    idenfitier: E,
    params: MessageBrokerParams[E],
  ): void {
    this.rabbitMqClient.emit(idenfitier, params);
  }
}
