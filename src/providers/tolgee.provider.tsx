import { PropsWithChildren } from 'react';

import { TolgeeNextProvider } from '@/tolgee/client';
import { getTolgee } from '@/tolgee/server';

type TolgeeProviderProps = PropsWithChildren & {
  language: string;
};

export default async function TolgeeProvider({ children, language }: TolgeeProviderProps) {
  const tolgee = await getTolgee();
  // serializable data that are passed to client components
  const staticData = await tolgee.loadRequired();

  return (
    <TolgeeNextProvider language={language} staticData={staticData}>
      {children}
    </TolgeeNextProvider>
  );
}
