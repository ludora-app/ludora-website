'use client';

import { ICONS, TIcons } from '@/constants/ICONS';
import { cn } from '@chillUi';
import { useMemo, useState } from 'react';

type IconProps = {
  name: TIcons;
  className?: string;
  color?: string;
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  colorOnHover?: string;
};
function Icon({ className, color, colorOnHover, name, size = 'md' }: IconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const icon = ICONS[name];

  const iconSize = useMemo(() => {
    switch (size) {
      case '2xs':
        return 12;
      case 'xs':
        return 16;
      case 'sm':
        return 20;
      case 'md':
        return 24;
      case 'lg':
        return 32;
      case 'xl':
        return 40;
      case '2xl':
        return 48;
      case '3xl':
        return 64;
      case '4xl':
        return 80;
      case '5xl':
        return 96;
      case '6xl':
        return 128;
      default:
        return 24;
    }
  }, [size]);
  if (!icon) return null;
  return (
    <svg
      viewBox={icon.viewBox}
      className={cn('inline-block', className)}
      color={colorOnHover ? (isHovered ? colorOnHover : color) : color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={iconSize}
      height={iconSize}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {icon.path.map((d, i) => (
        <path key={i} d={d} fill={colorOnHover ? (isHovered ? colorOnHover : color) : color} />
      ))}
    </svg>
  );
}

export { Icon };
