import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  
  // constructor(private config: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // appOrmConfig(): TypeOrmModuleOptions {
  //   const type = this.config.get('DB_TYPE');
  //   const database = this.config.get('DB_NAME')
  //   console.log(type, database)
  //   return {
  //       type: type,
  //       database: database,
  //       entities: [__dirname + "**/*.entity{.ts,.js}"],
  //       synchronize: true
  //   }
  // }

  // static appTypeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  //   useFactory: async (): Promise<TypeOrmModuleOptions> => {
  //       return this.appOrmConfig();
  //   }
  // };
}
