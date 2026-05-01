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
  },

  defaultVariants: { size: 'md', weight: 'normal' },
});

type Variants = VariantProps<typeof variants>;

export const Typography = ({
  size,
  weight,
  className,
  ...props
}: React.ComponentProps<'p'> & Variants) => (
  <p {...props} className={variants({ size, weight, className })} />
);
