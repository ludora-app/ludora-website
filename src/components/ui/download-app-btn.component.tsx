'use client';

import { useTranslate } from '@tolgee/react';
import Link from 'next/link';
import { useState } from 'react';

import { STORE_LINKS } from '@/constants/ROUTES';

import { Button, cn, Icon } from '../chill-ui';

export default function DownloadAppBtn({ className }: { className?: string }) {
  const { t } = useTranslate();
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
            id="download-app-btn-ios"
            size="lg"
            className={cn(
              'flex w-full items-center gap-2 border-0 bg-black text-white hover:bg-gray-800',
              className
            )}
          >
            <Icon name="app-store-solid" className="size-4" color="#fff" />
            {t('download_app_btn_ios')}
          </Button>
        </Link>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <Link href={STORE_LINKS.ANDROID} className="w-full sm:w-auto" target="_blank">
          <Button
            id="download-app-btn-android"
            size="lg"
            className={cn(
              'flex w-full items-center gap-2 border-0 bg-black text-white hover:bg-gray-800',
              className
            )}
          >
            <Icon name="google-play-solid" className="size-4" color="#fff" />
            {t('download_app_btn_android')}
          </Button>
        </Link>
      )}
    </>
  );
}
