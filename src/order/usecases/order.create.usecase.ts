import { Inject, Injectable } from '@nestjs/common';
import { IMessageBrokerService } from 'src/interfaces/message-broker.service.interface';
import { RabbitMqMessageBrokerService } from 'src/message-broker/rabbit-mq/rabbitmq-message-broker.service';

@Injectable()
export class OrderCreateUseCase {
  constructor(
    @Inject(RabbitMqMessageBrokerService)
    private readonly messageBrokerService: IMessageBrokerService,
  ) {}

  async execute(params: IOrderCreateUseCaseParams) {
    this.messageBrokerService.emmit('ORDER_PLACE', { order: params });
  }
}

export interface IOrderCreateUseCaseParams {
  email: string;
  productName: string;
  quantity: number;
}
