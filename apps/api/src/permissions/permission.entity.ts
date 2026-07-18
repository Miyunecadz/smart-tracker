import { defineEntity, p } from '@mikro-orm/postgresql';

export const PermissionEntity = defineEntity({
  name: 'Permission',
  tableName: 'permissions',
  properties: {
    id: p.integer().primary(),
    slug: p.string().unique(),
    description: p.string().nullable(),
    createdAt: p.datetime().defaultRaw('now()'),
    updatedAt: p
      .datetime()
      .defaultRaw('now()')
      .onUpdate(() => new Date()),
  },
});
