import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { User } from './user.type';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: EntityRepository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepo.findOne({ id } as any);
  }
}
