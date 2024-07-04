import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqConnectionName } from './rabbit-mq/rabbit-mq.constants';
import { RabbitMqMessageBrokerService } from './rabbit-mq/rabbitmq-message-broker.service';
import { MessageBrokerConsumers } from './message-broker.consumers';
import { env } from 'src/env';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: RabbitMqConnectionName,
        transport: Transport.RMQ,
        options: {
          urls: [env.rabbit_mq_url],
          queue: env.rabbit_mq_queue_name,
        },
      },
    ]),
  ],
  providers: [RabbitMqMessageBrokerService],
  controllers: [MessageBrokerConsumers],
  exports: [RabbitMqMessageBrokerService],
})
export class MessageBrokerModule {}
