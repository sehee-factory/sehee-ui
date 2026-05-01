import { Stack, Typography } from '@sehee/ui';

type Props = {
  componentName: string;
  descrption: string;
  children: React.ReactNode;
};

export const DescriptionComponent = ({ componentName, descrption, children }: Props) => (
  <Stack className="w-full">
    <Typography size="2xl" weight="bold">
      {componentName}
    </Typography>
    <Typography className="text-gray-400">{descrption}</Typography>
    <Stack
      items="center"
      gap={2}
      justify="center"
      className="items-center w-full p-4 border border-gray-200 rounded-md aspect-video"
    >
      {children}
    </Stack>
  </Stack>
);
