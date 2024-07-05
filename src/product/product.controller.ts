import { Body, Controller, Post } from '@nestjs/common';
import { ProductCreateUseCase } from './usecases/product.create.usecase';
import { ProductCreateBodyDto } from './dtos/product.create.body.dto';

@Controller('/product')
export class ProductController {
  constructor(private readonly productCreateUseCase: ProductCreateUseCase) {}

  @Post('/')
  async createProduct(@Body() body: ProductCreateBodyDto) {
    await this.productCreateUseCase.execute(body);
  }
}
