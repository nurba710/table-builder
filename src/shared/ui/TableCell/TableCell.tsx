import { memo } from 'react';
import clsx from 'clsx';

interface CellProps {
  value: string;
  isActive: boolean;
  onClick: () => void;
  onChange: (v: string) => void;
}

export const TableCell = memo(({ value, isActive, onClick, onChange }: CellProps) => (
  <td className="p-0 w-1/4" onClick={onClick}>
    <input
      className={clsx(
        'w-full h-10 px-3 py-[9px] border outline-none transition-colors',
        isActive ? 'bg-[#F4F9FF] border-[#ADC6FF]' : 'bg-white',
      )}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </td>
));
