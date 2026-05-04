import React, { useContext } from 'react';
import { Button, ButtonProps } from '../elements/button';
import { cn } from '../utils/cn';

const Context = React.createContext({ value: '', onChangeTab: (t?: string) => {} });

type Props = { defaultValue?: string };

const TabTrigger = (props: ButtonProps) => {
  const { onChangeTab } = useContext(Context);

  return (
    <Button
      {...props}
      onClick={(event) => {
        onChangeTab(props.value as string | undefined);
        props?.onClick?.(event);
      }}
    />
  );
};

const TabContent = ({ value, ...props }: React.ComponentProps<'div'> & { value: string }) => {
  const { value: currentTab } = useContext(Context);

  return <div {...props} className={cn(currentTab !== value && 'hidden', props.className)} />;
};

export const Tabs = ({ defaultValue = '', ...props }: React.ComponentProps<'div'> & Props) => {
  const [tab, setTab] = React.useState<string>(defaultValue);

  const onChangeTab = React.useCallback((v?: string) => setTab(v ?? ''), []);

  return (
    <Context value={{ value: tab, onChangeTab }}>
      <div data-tab={tab} {...props} />
    </Context>
  );
};

Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;
