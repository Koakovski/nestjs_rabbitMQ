import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderCreateUseCase } from './usecases/order.create.usecase';

@Module({
  controllers: [OrderController],
  providers: [OrderCreateUseCase],
})
export class OrderModule {}
