import { changeTableOrder } from 'store/slices/tableSlice';
import { useEffect, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { SortableTable, Table } from 'components';
import { useAppDispatch } from 'store/hooks/hooks';
import { ITable } from 'shared';

interface Props {
  tables: ITable[];
}

export const SortableTableList = ({ tables }: Props) => {
  const dispatch = useAppDispatch();
  const [orderedTables, setOrderedTables] = useState<ITable[] | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    if (orderedTables) {
      const oldIndex = orderedTables.findIndex((t) => t.id === active.id);
      const newIndex = orderedTables.findIndex((t) => t.id === over.id);

      setOrderedTables(arrayMove(orderedTables, oldIndex, newIndex));
      dispatch(changeTableOrder({ oldIndex, newIndex }));
    }
  };

  useEffect(() => {
    setOrderedTables(tables);
  }, [tables]);

  if (!orderedTables) return null;

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={orderedTables.map((t) => t.id)} strategy={rectSortingStrategy}>
        <div className="flex flex-wrap gap-4">
          {orderedTables.map((table) => (
            <SortableTable key={table.id} id={table.id}>
              <Table table={table} />
            </SortableTable>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
