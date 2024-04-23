import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.scss';
import Navbar from '@/views/Navbar';
import ContextWrapper from './ContextWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Blog Apps',
  description: 'Blog app using Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={poppins.className}>
        <ContextWrapper>
          <Navbar />
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
