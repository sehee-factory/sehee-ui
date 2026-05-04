import { Tabs, Toggle } from '@sehee/ui';

type PageConfig = {
  url: string;
  name: string;
  description: string;
  component: () => React.ReactNode;
};

export const COMPONENTS: PageConfig[] = [
  {
    url: '/tabs',
    name: '탭',
    description: '탭뷰',
    component: () => (
      <Tabs defaultValue="1">
        <div className="flex flex-row w-full">
          <Tabs.Trigger className="flex-1" value="1">
            1
          </Tabs.Trigger>
          <Tabs.Trigger className="flex-1" value="2">
            2
          </Tabs.Trigger>
          <Tabs.Trigger className="flex-1" value="3">
            3
          </Tabs.Trigger>
        </div>
        <Tabs.Content value="1">1</Tabs.Content>
        <Tabs.Content value="2">2</Tabs.Content>
        <Tabs.Content value="3">3</Tabs.Content>
      </Tabs>
    ),
  },
  {
    url: '/toggle',
    name: '토글',
    description: '토글',
    component: () => <Toggle />,
  },
];
