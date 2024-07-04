import { Body, Controller, Post } from '@nestjs/common';
import { OrderCreateBodyDto } from './dtos/order.create.body.dto';
import { OrderCreateUseCase } from './usecases/order.create.usecase';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderCreateUseCase: OrderCreateUseCase) {}

  @Post('/')
  async createOrder(@Body() body: OrderCreateBodyDto) {
    await this.orderCreateUseCase.execute(body);
  }
}
