import { useRef, useState } from 'react';
import { CreateTableForm } from 'components';
import { useOnClickOutside } from 'shared';

export const CreateTableButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="relative mb-[68px] w-fit">
      <button
        className="px-[67px] py-[15.5px] bg-[#1193FF] text-white rounded-[2px]"
        onClick={toggleDropdown}
      >
        Create Table
      </button>

      {isOpen && (
        <div className="absolute">
          <CreateTableForm onClose={closeDropdown} />
        </div>
      )}
    </div>
  );
};
