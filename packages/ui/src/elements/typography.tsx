import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
    hover: {
      normal: '',
      underline: 'hover:underline cursor-pointer',
    },
  },

  defaultVariants: { size: 'md', weight: 'normal', hover: 'normal' },
});

type Variants = VariantProps<typeof variants>;

export type TypographyProps = React.ComponentProps<'p'> & Variants;

export const Typography = ({ size, weight, hover, className, ...props }: TypographyProps) => (
  <p {...props} className={variants({ size, weight, hover, className })} />
);
