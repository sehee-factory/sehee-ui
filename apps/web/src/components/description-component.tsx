import { Stack, Typography } from '@sehee/ui';

type Props = {
  componentName: string;
  descrption: string;
  url: string;
  children: React.ReactNode;
};

export const DescriptionComponent = ({ componentName, descrption, url, children }: Props) => (
  <Stack>
    <Stack direction="row" justify="between" items="center">
      <Typography size="2xl" weight="bold">
        {componentName}
      </Typography>
      <a href={url}>
        <Typography className="text-gray-400" hover="underline">
          바로가기
        </Typography>
      </a>
    </Stack>
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
