import { ConfigModule } from '@nestjs/config';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: configService.get('DB_TYPE') as any,
            database: configService.get('DB_NAME') as any,
            entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
            synchronize: true
        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        return TypeOrmConfig.getOrmConfig(configService);
    }
};