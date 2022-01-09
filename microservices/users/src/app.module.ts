import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';

import commonConfig, { configurationSchema } from '@src/config/common.config';
import databaseConfig, {
  DatabaseConfiguration,
} from '@src/config/database.config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      load: [commonConfig, databaseConfig],
      validationSchema: configurationSchema,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const database = configService.get<DatabaseConfiguration>('database');
        console.log(`test: uri[${database.uri}]`);
        return {
          uri: database.uri,
          user: database.username,
          pass: database.password,
        };
      },
    }),
  ],
})
export class AppModule {}
