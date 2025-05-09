import { ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  id: string;
  children: ReactNode;
}

export const SortableTable = ({ id, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    const target = event.target as HTMLElement;
    if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(target.tagName)) {
      return;
    }

    listeners?.onPointerDown?.(event);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      ref={setNodeRef}
      {...attributes}
      style={style}
      className="basis-[32%] grow shrink cursor-move"
    >
      {children}
    </div>
  );
};
