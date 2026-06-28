import type { NextConfig } from 'next';
import path from 'path';

const config: NextConfig = {
  transpilePackages: ['@smart-tracker/graphql-types'],
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default config;
