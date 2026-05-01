import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('w-full text-md px-3 py-2 flex flex-row items-center justify-center', {
  variants: {
    variant: {
      solid: 'text-white bg-black',
      outline: 'border border-gray-200',
      ghost: '',
    },
    round: {
      md: 'rounded-md',
      lg: 'rounded-lg',
      circle: 'rounded-full',
    },
  },

  defaultVariants: {
    variant: 'solid',
    round: 'md',
  },
});

type Variants = VariantProps<typeof variants>;

export const Button = ({
  className,
  variant,
  round,
  ...props
}: React.ComponentProps<'button'> & Variants) => (
  <button {...props} className={variants({ variant, round, className })} />
);
