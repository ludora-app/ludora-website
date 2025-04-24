import { cn } from '@chillUi';
import { tv } from 'tailwind-variants';

import { HeadingProps } from '../utils/types';

export const headingStyles = tv({
  variants: {
    color: {
      accent: 'text-accent',
      card: 'text-card',
      dark: 'text-dark',
      destructive: 'text-destructive',
      gradient: 'bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent',
      light: 'text-white',
      popover: 'text-popover',
      primary: 'text-primary',
      ring: 'text-ring',
      secondary: 'text-secondary',
    },
    variant: {
      'title-1': 'font-title text-4xl lg:text-5xl font-bold',
      'title-2': 'font-title text-3xl lg:text-4xl font-bold',
      'title-3': 'font-title text-2xl lg:text-3xl font-bold',
      'title-4': 'font-title text-xl lg:text-2xl font-bold',
      'title-5': 'font-title text-lg lg:text-xl font-semibold',
      'title-6': 'font-title text-base lg:text-lg font-semibold',
      'title-7': 'font-title text-sm lg:text-base font-medium',
      'title-xl': 'font-title text-5xl lg:text-6xl font-bold',
    },
  },
});

function Heading({ as = 'h1', children, className, color = 'dark', title, variant = 'title-1' }: HeadingProps) {
  const Tag = as || 'h1';
  return <Tag className={cn(headingStyles({ color, variant }), className)}>{title ? title : children}</Tag>;
}

export { Heading };
