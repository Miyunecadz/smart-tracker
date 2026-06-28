import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
