import { cn } from '@chillUi';
import { tv } from 'tailwind-variants';

import { TypographyProps } from '../utils/types';

export const typographyStyles = tv({
  variants: {
    color: {
      accent: 'text-accent',
      dark: 'text-dark',
      destructive: 'text-destructive',
      gray: 'text-gray-600',
      light: 'text-white',
      primary: 'text-primary',
      ring: 'text-ring',
      secondary: 'text-secondary',
    },
    variant: {
      'body-1': 'font-body text-base font-normal',
      'body-2': 'font-body text-sm font-normal',
      'body-3': 'font-body text-xs font-normal',
    },
  },
});

function Typography({ children, className, color, content, variant }: TypographyProps) {
  return <p className={cn(typographyStyles({ color, variant }), className)}>{content ? content : children}</p>;
}

export { Typography };
