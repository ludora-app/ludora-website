import { cn } from '@chillUi';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { ButtonProps } from '../utils/types';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95  rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  variants: {
    size: {
      default: 'px-6 py-2 text-xs has-[>svg]:px-3',
      icon: 'size-9',
      lg: 'px-15 py-3 text-lg has-[>svg]:px-4',
      md: 'px-10 py-2 text-base has-[>svg]:px-4',
      sm: 'px-8 py-2 text-sm has-[>svg]:px-2.5',
      xl: 'px-20 py-4 text-xl has-[>svg]:px-4',
    },
    variant: {
      accent: 'bg-accent text-white',
      destructive: 'bg-destructive text-white',
      gradient:
        'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0',
      light: 'bg-white text-primary hover:bg-gray-100',
      primary: 'bg-primary text-white hover:bg-primary-hover',
      secondary: 'bg-secondary text-white',
    },
  },
});

const loadingIconVariants = tv({
  base: 'animate-spin',
  variants: {
    size: {
      default: 'size-5',
      icon: 'size-4',
      lg: 'size-6',
      md: 'size-5',
      sm: 'size-4',
      xl: 'size-7',
    },
  },
});

function Button({ asChild = false, className, isLoading = false, redirect, size, variant, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return redirect ? (
    <Link href={redirect}>
      <Comp data-slot="button" className={cn(buttonVariants({ className, size, variant }))} {...props}>
        {isLoading && <Loader2 className={cn(loadingIconVariants({ size }))} />}
        {props.children}
      </Comp>
    </Link>
  ) : (
    <Comp data-slot="button" className={cn(buttonVariants({ className, size, variant }))} {...props}>
      {isLoading && <Loader2 className={cn(loadingIconVariants({ size }))} />}
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
