import { ConfigModule } from '@nestjs/config';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        const type = configService.get('DB_TYPE');
        const database = configService.get('DB_NAME')
        console.log(type, database)
        return {
            type: type,
            database: database,
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