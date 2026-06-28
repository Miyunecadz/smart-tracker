import { defineEntity, p } from '@mikro-orm/postgresql';
import { User } from './user.type';

export const UserEntity = defineEntity({
  class: User,
  tableName: 'user',
  properties: {
    id: p.integer().primary(),
    email: p.string().unique(),
    name: p.string(),
    createdAt: p.datetime(),
  },
});
