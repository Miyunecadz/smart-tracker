import { defineEntity, p } from '@mikro-orm/postgresql';

export const RoleEntity = defineEntity({
  name: 'Role',
  tableName: 'roles',
  properties: {
    id: p.integer().primary(),
    slug: p.string().unique(),
    displayName: p.string(),
    description: p.string().nullable(),
    createdAt: p.datetime().defaultRaw('now()'),
    updatedAt: p
      .datetime()
      .defaultRaw('now()')
      .onUpdate(() => new Date()),
  },
});
