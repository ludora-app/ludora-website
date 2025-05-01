'use client';

import useIsMobile from '@/hooks/useIsMobile';
import NextImage from 'next/image';
import { useMemo } from 'react';

import { ChillImageProps } from '../utils/types';

export default function Image({ responsive = true, size = 'md', ...props }: ChillImageProps) {
  const { isMobile } = useIsMobile();
  const isResponsive = isMobile && responsive;

  const imageWidth = useMemo(() => {
    switch (size) {
      case 'xs':
        return isResponsive ? 50 : 100;
      case 'sm':
        return isResponsive ? 100 : 200;
      case 'md':
        return isResponsive ? 200 : 250;
      case 'lg':
        return isResponsive ? 200 : 250;
      case 'xl':
        return isResponsive ? 300 : 400;
      default:
        return props.width;
    }
  }, [props.width, size, isResponsive]);

  return <NextImage width={imageWidth} {...props} />;
}
