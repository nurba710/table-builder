import { useEffect } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  onClickOutside: () => void,
): void => {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, onClickOutside]);
};
