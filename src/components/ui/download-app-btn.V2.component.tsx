'use client';

import { COLORS } from '@/constants/COLORS';

import { Button, Icon } from '../chill-ui';
import { ComingSoonModal } from './comming-soon.modal';

export default function DownloadAppBtnV2() {
  const ua = navigator.userAgent;
  const platform = /android/i.test(ua) ? 'Android' : /iPad|iPhone|iPod/.test(ua) ? 'iOS' : 'Autre';

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
