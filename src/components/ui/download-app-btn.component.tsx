'use client';

import { useState } from 'react';

import { Button, cn, Icon } from '../chill-ui';
import { ComingSoonModal } from './comming-soon.modal';

export default function DownloadAppBtn({ className }: { className?: string }) {
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
            className={cn('flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800', className)}
          >
            <Icon name="app-store-solid" className="size-4" color="#fff" />
            App Store
          </Button>
        </ComingSoonModal>
      )}
      {(platform === 'Android' || platform === 'Autre') && (
        <ComingSoonModal>
          <Button
            size="lg"
            className={cn('flex items-center gap-2 border-0 bg-black text-white hover:bg-gray-800', className)}
          >
            <Icon name="google-play-solid" className="size-4" color="#fff" />
            Google Play
          </Button>
        </ComingSoonModal>
      )}
    </>
  );
}
