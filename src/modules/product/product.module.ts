import { Module } from '@nestjs/common';
import { ProductService } from '@modules/product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductController } from '@modules/product/product.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
