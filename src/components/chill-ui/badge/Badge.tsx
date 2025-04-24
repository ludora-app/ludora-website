import { cn } from '@chillUi';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { BadgeProps } from '../utils/types';

export const badgeVariants = tv({
  base: 'inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border shadow-sm font-semibold',
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    size: {
      lg: 'px-4 py-2 text-base',
      md: 'px-3 py-1.5 text-sm',
      sm: 'px-2 py-1 text-xs',
    },
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
      destructive:
        'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      gradient: 'border-transparent bg-gradient text-dark [a&]:hover:bg-gradient-to-r from-orange-600 to-rose-600',
      light: 'border-transparent bg-white text-primary-foreground [a&]:hover:bg-primary/90',
      outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      primary: 'border-transparent bg-primary text-white [a&]:hover:bg-primary/90',
      secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
    },
  },
});

function Badge({ asChild = false, className, onClick, size = 'sm', variant, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ size, variant }), className, {
        'cursor-pointer transition-transform hover:scale-110': !!onClick,
      })}
      onClick={onClick}
      {...props}
    />
  );
}

export { Badge };
