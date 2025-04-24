import React from 'react';
import { Toaster } from 'sonner';

import QueryClientProvider from './query-client.provider';

export default function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <Toaster richColors closeButton />

      {children}
    </QueryClientProvider>
  );
}
