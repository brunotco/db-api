import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: process.env.DB_TYPE as any,
    database: process.env.DB_NAME as any,
    entities: [__dirname + '/../../entities/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
};
