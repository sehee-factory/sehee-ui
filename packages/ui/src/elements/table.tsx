import { cn } from '../utils/cn';

export const Table = (props: React.ComponentProps<'table'>) => (
  <table {...props} className={cn('text-center w-full', props.className)} />
);

Table.Thead = (props: React.ComponentProps<'thead'>) => (
  <thead {...props} className={cn('border-b border-gray-200', props.className)} />
);
Table.TBody = (props: React.ComponentProps<'tbody'>) => <tbody {...props} />;
Table.Tr = (props: React.ComponentProps<'tr'>) => (
  <tr {...props} className={cn('border-b border-gray-200 last:border-none', props.className)} />
);
Table.Th = (props: React.ComponentProps<'th'>) => (
  <th {...props} className={cn('font-bold px-4 py-2', props.className)} />
);
Table.Td = (props: React.ComponentProps<'td'>) => (
  <td {...props} className={cn('px-4 py-2', props.className)} />
);
