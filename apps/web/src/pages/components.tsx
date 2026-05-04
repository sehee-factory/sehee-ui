import { Toggle } from '@sehee/ui';

type PageConfig = {
  url: string;
  name: string;
  description: string;
  component: () => React.ReactNode;
};

export const COMPONENTS: PageConfig[] = [
  {
    url: '/toggle',
    name: '토글',
    description: '토글',
    component: () => <Toggle />,
  },
];
