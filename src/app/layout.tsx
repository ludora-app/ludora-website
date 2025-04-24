import type { Metadata } from 'next';

import { Footer, Header } from '@/features';
import MainProvider from '@/providers/main.provider';
import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  description: 'Ludora',
  title: 'Ludora',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        <MainProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
