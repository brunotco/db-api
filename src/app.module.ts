import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@modules/auth/auth.module';
import { ProductModule } from '@modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "productsDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    AuthModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
