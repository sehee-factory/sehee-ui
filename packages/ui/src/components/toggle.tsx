import React from 'react';
import { OnValueChange } from '../@type/props';

export const Toggle = ({
  defaultCheck = false,
  onValueChange,
}: {
  defaultCheck?: boolean;
  onValueChange?: OnValueChange<boolean>;
}) => {
  const [toggle, setToggle] = React.useState(defaultCheck);

  const onToggle = React.useCallback(() => {
    setToggle((prev) => !prev);
  }, [toggle]);

  React.useEffect(() => {
    onValueChange?.(toggle);
  }, [toggle]);

  return (
    <label
      tabIndex={-1}
      data-check={toggle}
      className="relative flex flex-row items-center w-10 h-6 border border-gray-200 rounded-xl bg-white data-[check='true']:bg-blue-600"
      onClick={onToggle}
    >
      <span
        data-check={toggle}
        className="absolute size-4 bg-blue-600 rounded-full transition-[left] duration-500 data-[check='true']:bg-white left-1 data-[check='true']:left-4.5"
      />
    </label>
  );
};
