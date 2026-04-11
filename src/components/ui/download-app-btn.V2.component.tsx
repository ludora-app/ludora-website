'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ANALYTICS_EVENTS } from '@/constants/analytics-events.constants';
import { COLORS } from '@/constants/COLORS';
import { STORE_LINKS } from '@/constants/ROUTES';
import { useAnalytics } from '@/hooks/analytics-trackers.hook';

import { Button, Icon } from '../chill-ui';

export default function DownloadAppBtnV2() {
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();
  const [platform] = useState(() => {
    if (typeof window === 'undefined') return 'Autre';
    const ua = navigator.userAgent;
    return /android/i.test(ua) ? 'Android' : /iPad|iPhone|iPod/.test(ua) ? 'iOS' : 'Autre';
  });

  return (
    <>
      {(platform === 'iOS' || platform === 'Autre') && (
        <Link href={STORE_LINKS.IOS} className="w-full sm:w-auto" target="_blank">
          <Button
            size="lg"
            variant="light"
            onClick={() => trackEvent({ data: { page: pathname }, eventName: ANALYTICS_EVENTS.STORE.APP_STORE })}
          >
            <Icon name="app-store-solid" color={COLORS.PRIMARY} />
            Télécharger sur l&apos;App Store
          </Button>
        </Link>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <Link href={STORE_LINKS.ANDROID} className="w-full sm:w-auto" target="_blank">
          <Button
            size="lg"
            variant="light"
            onClick={() => trackEvent({ data: { page: pathname }, eventName: ANALYTICS_EVENTS.STORE.GOOGLE_PLAY })}
          >
            <Icon name="google-play-solid" color={COLORS.PRIMARY} />
            Télécharger sur Google Play
          </Button>
        </Link>
      )}
    </>
  );
}
