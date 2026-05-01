import { cva, VariantProps } from 'class-variance-authority';

const variants = cva('w-full flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'jusify-between',
      around: 'jusify-around',
      evenly: 'jusify-evenly',
    },
    items: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    gap: {
      4: 'gap-4',
      2: 'gap-2',
    },
  },
  defaultVariants: {
    direction: 'column',
    gap: 4,
    justify: 'start',
    items: 'start',
  },
});

type Variants = VariantProps<typeof variants>;

export const Stack = ({
  direction,
  gap,
  justify,
  items,
  className,
  ...props
}: React.ComponentProps<'div'> & Variants) => (
  <div {...props} className={variants({ className, direction, justify, items, gap })} />
);
