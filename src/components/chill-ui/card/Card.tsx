import { cn, Heading, HeadingProps, Typography } from '@chillUi';
import * as React from 'react';

import { TypographyProps } from '../utils/types';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  );
}
type CardTitleProps = {
  color?: HeadingProps['color'];
  variant?: HeadingProps['variant'];
  as?: HeadingProps['as'];
} & React.ComponentProps<'div'>;

function CardTitle({ as = 'h2', className, color = 'light', variant = 'title-2', ...props }: CardTitleProps) {
  return (
    <div data-slot="card-title" className={className} {...props}>
      <Heading as={as} variant={variant} color={color}>
        {props.children}
      </Heading>
    </div>
  );
}

type CardDescriptionProps = {
  color?: TypographyProps['color'];
  variant?: TypographyProps['variant'];
} & React.ComponentProps<'div'>;

function CardDescription({ className, color = 'dark', variant = 'body-1', ...props }: CardDescriptionProps) {
  return (
    <div data-slot="card-description" className={className} {...props}>
      <Typography variant={variant} color={color}>
        {props.children}
      </Typography>
    </div>
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-footer" className={cn('flex items-center px-6 [.border-t]:pt-6', className)} {...props} />
  );
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
