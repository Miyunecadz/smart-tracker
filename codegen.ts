import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './apps/api/schema.gql',
  documents: ['apps/web/src/**/*.tsx', 'apps/web/src/**/*.ts'],
  generates: {
    'packages/graphql-types/src/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        scalars: {
          DateTime: 'string',
          ID: 'string',
        },
      },
    },
  },
};

export default config;
