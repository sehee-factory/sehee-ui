import { cn } from '../utils/cn';

export const Description = (props: React.ComponentProps<'div'>) => (
  <div
    {...props}
    className={cn('resize-none border-l-4 border-gray-200 w-full px-4 py-2', props.className)}
  />
);
