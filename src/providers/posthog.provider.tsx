'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { PropsWithChildren, useEffect } from 'react';

export function PostHogProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: '2026-01-30',
      enable_heatmaps: true,
      ui_host: 'https://eu.posthog.com',
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
