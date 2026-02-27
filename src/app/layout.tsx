import type { Metadata } from 'next';

import './globals.css';

import { ConditionalShell } from '@/components/layout/conditional-shell.component';
import MainProvider from '@/providers/main.provider';

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
    <MainProvider>
      <ConditionalShell>{children}</ConditionalShell>
    </MainProvider>
  );
}
