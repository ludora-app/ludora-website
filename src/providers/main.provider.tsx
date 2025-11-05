import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import { getLanguage } from '../tolgee/language';
import HtmlBodyProvider from './html-body.provider';
import { PlausibleProvider } from './plausible.provider';
import QueryClientProvider from './query-client.provider';
import TolgeeProvider from './tolgee.provider';

export default async function MainProvider({ children }: { children: ReactNode }) {
  const locale = await getLanguage();

  return (
    <HtmlBodyProvider language={locale}>
      <TolgeeProvider language={locale}>
        <QueryClientProvider>
          <Toaster richColors closeButton />
          <PlausibleProvider>{children}</PlausibleProvider>
        </QueryClientProvider>
      </TolgeeProvider>
    </HtmlBodyProvider>
  );
}
