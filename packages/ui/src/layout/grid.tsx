import { cva, VariantProps } from 'class-variance-authority';

const variants = cva('grid w-full', {
  variants: {
    mobile: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
    },
    tablet: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
    },
    pc: {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
    },
    gap: {
      2: 'gap-2',
      4: 'gap-4',
    },
  },
  defaultVariants: {
    mobile: 1,
    tablet: 2,
    pc: 3,
    gap: 4,
  },
});

type Variants = VariantProps<typeof variants>;

export const Grid = ({
  mobile,
  tablet,
  pc,
  gap,
  className,
  ...props
}: React.ComponentProps<'div'> & Variants) => (
  <div {...props} className={variants({ mobile, tablet, pc, gap, className })} />
);
