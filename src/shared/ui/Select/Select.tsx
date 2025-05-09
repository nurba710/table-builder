import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';
import { IOptions } from 'shared/consts/types';
import { Icon } from 'components';
import { useOnClickOutside } from 'shared/hooks/useOnClickOutside';

interface Props {
  value: string;
  options: Array<IOptions>;
  onChange: (value: string) => void;
}

export const Select = React.memo(({ value, onChange, options }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useOnClickOutside(ref, () => setMenuOpen(false));

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={handleToggleMenu}
        className="flex justify-between items-center w-full px-3 p-[14px] border rounded"
      >
        <span className="text-[12px]">{value}</span>
        <Icon
          name="chevronDown"
          size={14}
          className={clsx('transition-transform', menuOpen && 'rotate-180')}
        />
      </button>
      {menuOpen && (
        <div className="absolute px-[14px] w-full bg-white border rounded-[4px] shadow z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setMenuOpen(false);
              }}
              className="cursor-pointer border-b border-[#E6ECEF] py-[14px] text-[12px] text-[#868A8D] last:border-b-0 hover:text-black"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
