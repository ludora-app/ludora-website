import { ImageProps } from 'next/image';
import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'tailwind-variants';

import { badgeVariants } from '../badge/Badge';
import { buttonVariants } from '../button/Button';
import { headingStyles } from '../heading/Heading';
import { Input, inputVariants } from '../input/Input';
import { Textarea } from '../textArea';
import { typographyStyles } from '../typography/Typography';

export type HeadingProps = {
  variant?: VariantProps<typeof headingStyles>['variant'];
  children?: React.ReactNode;
  title?: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: VariantProps<typeof headingStyles>['color'];
};

export type TypographyProps = {
  variant?: VariantProps<typeof typographyStyles>['variant'];
  children?: React.ReactNode;
  className?: string;
  content?: string;
  color?: VariantProps<typeof typographyStyles>['color'];
  onClick?: () => void;
};

export type BadgeProps = React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean };

export type InputProps = {
  size?: VariantProps<typeof inputVariants>['size'];
} & React.ComponentProps<'input'>;

export type FormInputProps = {
  label?: string;
  placeholder?: string;
  containerClassName?: string;
  className?: string;
  showError?: boolean;
  textArea?: boolean;
  resizable?: boolean;
  isRequired?: boolean;
} & (React.ComponentProps<typeof Input> | React.ComponentProps<typeof Textarea>);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
  asChild?: boolean;
  isLoading?: boolean;
  redirect?: string;
};

export interface ChillImageProps extends ImageProps {
  responsive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
