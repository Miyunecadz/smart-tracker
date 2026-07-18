import { join } from 'path';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MikroOrmMiddleware } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/user.entity';
import { RoleEntity } from './roles/role.entity';
import { PermissionEntity } from './permissions/permission.entity';
import { RolePermissionEntity } from './role-permissions/role-permission.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        driver: PostgreSqlDriver,
        clientUrl: config.get('DATABASE_URL'),
        entities: [UserEntity, RoleEntity, PermissionEntity, RolePermissionEntity],
        debug: config.get('NODE_ENV') !== 'production',
      }),
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
    }),

    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
