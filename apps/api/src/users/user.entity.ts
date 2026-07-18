import { defineEntity, p } from '@mikro-orm/postgresql';
import { RoleEntity } from '../roles/role.entity';

export const UserStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const UserEntity = defineEntity({
  name: 'User',
  tableName: 'users',
  properties: {
    id: p.integer().primary(),
    name: p.string(),
    email: p.string().unique(),
    // Never exposed on the GraphQL surface and hidden from serialization.
    hashPassword: p.string().hidden(),
    status: p.enum(Object.values(UserStatus)).default(UserStatus.ACTIVE),
    // role_id FK, NOT NULL (m:1 is non-nullable unless .nullable()).
    role: p.manyToOne(RoleEntity),
    emailVerifiedAt: p.datetime().nullable(),
    lastLoginAt: p.datetime().nullable(),
    lastLoginIp: p.string().nullable(),
    failedLoginAttempts: p.integer().default(0),
    lockoutUntil: p.datetime().nullable(),
    createdAt: p.datetime().defaultRaw('now()'),
    updatedAt: p
      .datetime()
      .defaultRaw('now()')
      .onUpdate(() => new Date()),
    // Soft-delete column; filter wiring deferred to a future ticket.
    deletedAt: p.datetime().nullable(),
  },
});
