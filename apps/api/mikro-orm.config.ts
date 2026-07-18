import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { config } from 'dotenv';
import { resolve } from 'path';
import { UserEntity } from './src/users/user.entity';
import { RoleEntity } from './src/roles/role.entity';
import { PermissionEntity } from './src/permissions/permission.entity';
import { RolePermissionEntity } from './src/role-permissions/role-permission.entity';

config({ path: resolve(__dirname, '.env') });

export default defineConfig({
  clientUrl: process.env.DATABASE_URL,
  entities: [UserEntity, RoleEntity, PermissionEntity, RolePermissionEntity],
  extensions: [Migrator],
  migrations: {
    path: './migrations',
  },
  debug: process.env.NODE_ENV !== 'production',
});
