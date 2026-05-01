import { cn } from '../utils/cn';

export const Checkbox = ({ type, className, ...props }: React.ComponentProps<'input'>) => (
  <input type="checkbox" className={cn('border border-gray-200', className)} {...props} />
);
