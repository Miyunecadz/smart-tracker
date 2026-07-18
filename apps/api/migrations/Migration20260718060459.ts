import { Migration } from '@mikro-orm/migrations';

export class Migration20260718060459 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "permissions" ("id" serial primary key, "slug" varchar(255) not null, "description" varchar(255) null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now());`);
    this.addSql(`alter table "permissions" add constraint "permissions_slug_unique" unique ("slug");`);

    this.addSql(`create table "roles" ("id" serial primary key, "slug" varchar(255) not null, "display_name" varchar(255) not null, "description" varchar(255) null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now());`);
    this.addSql(`alter table "roles" add constraint "roles_slug_unique" unique ("slug");`);

    this.addSql(`create table "role_permissions" ("id" serial primary key, "role_id" int not null, "permission_id" int not null, "created_at" timestamptz not null default now());`);
    this.addSql(`alter table "role_permissions" add constraint "role_permissions_role_id_permission_id_unique" unique ("role_id", "permission_id");`);

    this.addSql(`create table "users" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "hash_password" varchar(255) not null, "status" text not null default 'active', "role_id" int not null, "email_verified_at" timestamptz null, "last_login_at" timestamptz null, "last_login_ip" varchar(255) null, "failed_login_attempts" int not null default 0, "lockout_until" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null);`);
    this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);

    this.addSql(`alter table "role_permissions" add constraint "role_permissions_role_id_foreign" foreign key ("role_id") references "roles" ("id") on delete cascade;`);
    this.addSql(`alter table "role_permissions" add constraint "role_permissions_permission_id_foreign" foreign key ("permission_id") references "permissions" ("id") on delete cascade;`);

    this.addSql(`alter table "users" add constraint "users_role_id_foreign" foreign key ("role_id") references "roles" ("id");`);
    this.addSql(`alter table "users" add constraint "users_status_check" check ("status" in ('active', 'inactive', 'suspended'));`);
  }

  override down(): void | Promise<void> {
    this.addSql(`alter table "role_permissions" drop constraint "role_permissions_permission_id_foreign";`);
    this.addSql(`alter table "role_permissions" drop constraint "role_permissions_role_id_foreign";`);
    this.addSql(`alter table "users" drop constraint "users_role_id_foreign";`);

    this.addSql(`drop table if exists "permissions" cascade;`);
    this.addSql(`drop table if exists "roles" cascade;`);
    this.addSql(`drop table if exists "role_permissions" cascade;`);
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
