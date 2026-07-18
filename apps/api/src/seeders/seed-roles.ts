import { MikroORM } from '@mikro-orm/postgresql';
import config from '../../mikro-orm.config';
import { RoleEntity } from '../roles/role.entity';

/**
 * Idempotent seeder: ensures the single default role (`slug: user`) exists.
 * Downstream signup assigns new users this role's id.
 *
 * Run: `pnpm --filter @smart-tracker/api seed:roles`
 */
async function run(): Promise<void> {
  const orm = await MikroORM.init(config);
  try {
    const em = orm.em.fork();
    const existing = await em.findOne(RoleEntity, { slug: 'user' });

    if (existing) {
      console.log('Default role "user" already exists — skipping.');
      return;
    }

    em.create(RoleEntity, {
      slug: 'user',
      displayName: 'User',
    });
    await em.flush();
    console.log('Seeded default role "user".');
  } finally {
    await orm.close(true);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
