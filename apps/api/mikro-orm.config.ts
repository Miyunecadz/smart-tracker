import { defineConfig } from '@mikro-orm/postgresql';
import { config } from 'dotenv';
import { resolve } from 'path';
import { UserEntity } from './src/users/user.entity';

config({ path: resolve(__dirname, '.env') });

export default defineConfig({
  clientUrl: process.env.DATABASE_URL,
  entities: [UserEntity],
  migrations: {
    path: './migrations',
  },
  debug: process.env.NODE_ENV !== 'production',
});
