import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import { Footer, Header } from '@/features';

import './globals.css';

import MainProvider from '@/providers/main.provider';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  description:
    'Ludora est l’appli qui te connecte instantanément à des partenaires pour jouer au foot, basket, padel et plus. Crée ou rejoins un match, réserve un terrain, et joue sans prise de tête. Le sport collectif devient enfin simple, local et spontané.',
  icons: {
    icon: '/static/favicon.ico',
  },
  title: 'Ludora – Trouve des partenaires de sport collectif près de toi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
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
