import { cn } from '../utils/cn';

export const Radio = ({ type, className, ...props }: React.ComponentProps<'input'>) => (
  <input type="radio" className={cn('border border-gray-200', className)} {...props} />
);
