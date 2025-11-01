'use client';

import { trackAppRouter } from '@socialgouv/matomo-next';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL ?? '';
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? '';

export function MatomoProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    trackAppRouter({
      cleanUrl: true,
      enableHeartBeatTimer: true,
      enableHeatmapSessionRecording: true,
      pathname,
      searchParams,
      siteId: MATOMO_SITE_ID,
      url: MATOMO_URL,
    });
  }, [pathname, searchParams]);

  return null;
}
