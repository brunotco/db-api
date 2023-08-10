import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UsageType } from '@common/typings/usage-type.enum';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  // @IsOptional()
  // @IsString()
  // @Column({ nullable: true })
  // description?: string;

  @IsOptional()
  @IsNumber()
  @Column({ default: 0 })
  price: number;

  @IsOptional()
  @IsNumber()
  @Column({ default: 0 })
  quantity: number;

  // @Column({ type: 'enum', enum: UsageType, default: UsageType.PERSONAL })
  // usage: UsageType;

  @IsEmpty()
  @CreateDateColumn()
  created: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updated: Date;
}
