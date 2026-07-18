import { defineEntity, p } from '@mikro-orm/postgresql';
import { RoleEntity } from '../roles/role.entity';
import { PermissionEntity } from '../permissions/permission.entity';

/**
 * M:N pivot between {@link RoleEntity} and {@link PermissionEntity}.
 * Composite unique on (role_id, permission_id) prevents duplicate grants.
 */
export const RolePermissionEntity = defineEntity({
  name: 'RolePermission',
  tableName: 'role_permissions',
  uniques: [{ properties: ['role', 'permission'] }],
  properties: {
    id: p.integer().primary(),
    role: p.manyToOne(RoleEntity).deleteRule('cascade'),
    permission: p.manyToOne(PermissionEntity).deleteRule('cascade'),
    createdAt: p.datetime().defaultRaw('now()'),
  },
});
