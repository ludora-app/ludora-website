import React, { Suspense } from 'react';
import { Toaster } from 'sonner';

import { getLanguage } from '../tolgee/language';
import HtmlBodyProvider from './HtmlBody.provider';
import { MatomoProvider } from './matomo-provider';
import QueryClientProvider from './query-client.provider';
import TolgeeProvider from './tolgee.provider';

export default async function MainProvider({ children }: { children: React.ReactNode }) {
  const locale = await getLanguage();

  return (
    <HtmlBodyProvider language={locale}>
      <TolgeeProvider language={locale}>
        <QueryClientProvider>
          <Toaster richColors closeButton />
          <Suspense fallback={null}>
            <MatomoProvider />
          </Suspense>
          {children}
        </QueryClientProvider>
      </TolgeeProvider>
    </HtmlBodyProvider>
  );
}
