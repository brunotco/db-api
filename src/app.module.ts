import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@modules/auth/auth.module';
import { ProductModule } from '@modules/product/product.module';
import { typeOrmConfig } from '@common/config/typeorm.config';
import { typeOrmConfigAsync } from '@common/config/typeormasync.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    AuthModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
