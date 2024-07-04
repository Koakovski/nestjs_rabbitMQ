import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const messageBroker =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: [env.rabbit_mq_url],
        queue: env.rabbit_mq_queue_name,
      },
    });

  messageBroker.listen();

  await app.listen(3000);
}
bootstrap();
