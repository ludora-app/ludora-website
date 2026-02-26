import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import { getLanguage } from '../tolgee/language';
import HtmlBodyProvider from './html-body.provider';
import { PostHogProvider } from './posthog.provider';
import QueryClientProvider from './query-client.provider';
import TolgeeProvider from './tolgee.provider';

export default async function MainProvider({ children }: { children: ReactNode }) {
  const locale = await getLanguage();

  return (
    <HtmlBodyProvider language={locale}>
      <TolgeeProvider language={locale}>
        <QueryClientProvider>
          <PostHogProvider>
            <Toaster richColors closeButton />
            {children}
          </PostHogProvider>
        </QueryClientProvider>
      </TolgeeProvider>
    </HtmlBodyProvider>
  );
}
