'use client';

import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants/ROUTES';
import { Footer, Header } from '@/features';

const STANDALONE_PATHS: string[] = [ROUTES.EMAIL_VERIFIED];

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = pathname && STANDALONE_PATHS.includes(pathname);

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
