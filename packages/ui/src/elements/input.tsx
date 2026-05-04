import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
  'w-full text-md px-3 py-2 flex flex-row items-center justify-center border border-gray-200',
  {
    variants: {
      round: {
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      round: 'md',
    },
  },
);

type Variants = VariantProps<typeof variants>;

export type InputProps = React.ComponentProps<'input'> & Variants;

export const Input = ({ round, className, ...props }: InputProps) => (
  <input {...props} className={variants({ round, className })} />
);
