'use client';

import { COLORS } from '@/constants/COLORS';
import { useEffect, useState } from 'react';

import { Button, Icon } from '../chill-ui';
import { ComingSoonModal } from './comming-soon.modal';

export default function DownloadAppBtnV2() {
  const [platform, setPlatform] = useState<'iOS' | 'Android' | 'Autre'>('Autre');

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setPlatform('Android');
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      setPlatform('iOS');
    } else {
      setPlatform('Autre');
    }
  }, []);

  return (
    <>
      {(platform === 'iOS' || platform === 'Autre') && (
        <ComingSoonModal>
          <Button size="lg" variant="light">
            <Icon name="app-store-solid" color={COLORS.PRIMARY} />
            Télécharger sur l&apos;App Store
          </Button>
        </ComingSoonModal>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <ComingSoonModal>
          <Button size="lg" variant="light">
            <Icon name="google-play-solid" color={COLORS.PRIMARY} />
            Télécharger sur Google Play
          </Button>
        </ComingSoonModal>
      )}
    </>
  );
}
