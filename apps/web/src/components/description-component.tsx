import { Typography } from '@sehee/ui';

type Props = {
  componentName: string;
  descrption: string;
  children: React.ReactNode;
};

export const DescriptionComponent = ({ componentName, descrption, children }: Props) => (
  <div className="flex flex-col max-w-lg gap-4 m-auto">
    <Typography size="2xl" weight="bold">
      {componentName}
    </Typography>
    <Typography className="text-gray-400">{descrption}</Typography>
    <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-md">{children}</div>
  </div>
);
