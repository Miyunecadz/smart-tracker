import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import type { UsersQuery } from '@smart-tracker/graphql-types';

const GET_USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`;

export default async function HomePage() {
  const { data } = await getClient().query<UsersQuery>({ query: GET_USERS });

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {data.users.map((user) => (
          <li key={user.id} className="p-4 rounded-lg border bg-card text-card-foreground">
            <p className="font-medium">{user.name}</p>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
