'use client';

import { useTranslate } from '@tolgee/react';
import { useState } from 'react';

import { useEventTracking } from '@/hooks/usePlausible';

import { Button, cn, Icon } from '../chill-ui';
import { ComingSoonModal } from './comming-soon.modal';

export default function DownloadAppBtn({ className }: { className?: string }) {
  const { trackEvent } = useEventTracking();
  const { t } = useTranslate();
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
            id="download-app-btn-ios"
            size="lg"
            className={cn('flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800', className)}
            onClick={() =>
              trackEvent({
                action: 'click',
                buttonId: 'download-app-btn-ios',
                category: 'download-app',
                eventName: 'downloadAppBtnIos',
                source: 'home-section-1',
              })
            }
          >
            <Icon name="app-store-solid" className="size-4" color="#fff" />
            {t('download_app_btn_ios')}
          </Button>
        </ComingSoonModal>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <ComingSoonModal>
          <Button
            id="download-app-btn-android"
            size="lg"
            className={cn('flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800', className)}
            onClick={() =>
              trackEvent({
                action: 'click',
                buttonId: 'download-app-btn-android',
                category: 'download-app',
                eventName: 'downloadAppBtnAndroid',
                source: 'home-section-1',
              })
            }
          >
            <Icon name="google-play-solid" className="size-4" color="#fff" />
            {t('download_app_btn_android')}
          </Button>
        </ComingSoonModal>
      )}
    </>
  );
}
