import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductCreateUseCase } from './usecases/product.create.usecase';

@Module({
  controllers: [ProductController],
  providers: [ProductCreateUseCase],
})
export class ProductModule {}
