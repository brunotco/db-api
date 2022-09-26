import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { UserEntity } from '@entities/user.entity';
import { ProductEntity } from '@entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async create(
    product: ProductEntity,
    user: UserEntity,
  ): Promise<ProductEntity> {
    if (user.role === 'admin') {
      return await this.productRepository.save(product);
    }
    throw new UnauthorizedException();
  }

  async getOne(id: string): Promise<ProductEntity> {
    return this.productRepository.findOneBy({ id });
  }

  async update(
    id: string,
    product: ProductEntity,
    user: UserEntity,
  ): Promise<UpdateResult> {
    if (user.role === 'admin') {
      return await this.productRepository.update(id, product);
    }
    throw new UnauthorizedException();
  }

  async delete(id: string, user: UserEntity): Promise<DeleteResult> {
    if (user.role === 'admin') {
      return await this.productRepository.delete(id);
    }
    throw new UnauthorizedException();
  }
}
