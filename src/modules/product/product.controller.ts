import {
  Controller,
  UseGuards,
  Get,
  Request,
  Body,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { ProductService } from '@modules/product/product.service';
import { JwtAuthGuard } from '@common/security/jwt.auth.guard';
import { ProductEntity } from '@entities/product.entity';

@Controller('api/v1/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<ProductEntity[]> {
    return await this.productService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Request() req,
    @Body() product: ProductEntity,
  ): Promise<ProductEntity> {
    return await this.productService.create(product, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<ProductEntity> {
    return await this.productService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() product: ProductEntity,
    @Request() req,
  ): Promise<UpdateResult> {
    return await this.productService.update(id, product, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Request() req): Promise<DeleteResult> {
    return await this.productService.delete(id, req.user);
  }
}
