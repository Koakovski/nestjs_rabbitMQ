import { Inject, Injectable } from '@nestjs/common';
import { IMessageBrokerService } from 'src/interfaces/message-broker.service.interface';
import { RabbitMqMessageBrokerService } from 'src/message-broker/rabbit-mq/rabbitmq-message-broker.service';

@Injectable()
export class ProductCreateUseCase {
  constructor(
    @Inject(RabbitMqMessageBrokerService)
    private readonly messageBrokerService: IMessageBrokerService,
  ) {}

  async execute(params: IProductCreateUseCaseParams) {
    this.messageBrokerService.emmit('PRODUCT_CREATED', { product: params });
  }
}

export interface IProductCreateUseCaseParams {
  name: string;
  price: number;
}
