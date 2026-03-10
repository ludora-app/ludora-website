'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ANALYTICS_EVENTS } from '@/constants/analytics-events.constants';
import { COLORS } from '@/constants/COLORS';
import { useAnalytics } from '@/hooks/analytics-trackers.hook';

import { Button, Icon } from '../chill-ui';
import { ComingSoonModal } from './comming-soon.modal';

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
        <ComingSoonModal>
          <Button
            size="lg"
            variant="light"
            onClick={() => trackEvent({ data: { page: pathname }, eventName: ANALYTICS_EVENTS.STORE.APP_STORE })}
          >
            <Icon name="app-store-solid" color={COLORS.PRIMARY} />
            Télécharger sur l&apos;App Store
          </Button>
        </ComingSoonModal>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <ComingSoonModal>
          <Button
            size="lg"
            variant="light"
            onClick={() => trackEvent({ data: { page: pathname }, eventName: ANALYTICS_EVENTS.STORE.GOOGLE_PLAY })}
          >
            <Icon name="google-play-solid" color={COLORS.PRIMARY} />
            Télécharger sur Google Play
          </Button>
        </ComingSoonModal>
      )}
    </>
  );
}
