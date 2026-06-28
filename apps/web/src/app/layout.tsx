import type { Metadata } from 'next';
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Tracker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
