import { useRef, useState } from 'react';
import clsx from 'clsx';
import { updateCell } from 'store/slices/tableSlice';
import { useAppDispatch } from 'store/hooks/hooks';
import { CopyButton, ITable, TableCell, useOnClickOutside } from 'shared';

interface TableProps {
  table: ITable;
}

export const Table = ({ table }: TableProps) => {
  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLTableElement>(null);
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  const headers = Object.values(table.columns);

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) =>
    dispatch(updateCell({ tableId: table.id, rowIndex, colIndex, value }));

  useOnClickOutside(tableRef, () => setActiveCell(null));

  return (
    <table
      ref={tableRef}
      className="w-full table-fixed border border-[#D2D2D2] bg-white overflow-hidden"
    >
      <thead className="bg-[#0A508B] text-white text-[12px] text-opacity-50">
        <tr>
          {headers.map((header, index) => {
            const last = index === headers.length - 1;
            return (
              <th
                key={index}
                className="px-[6px] py-[8px] text-left"
                style={{ width: `${100 / headers.length}%` }}
              >
                <div className={clsx(last && 'flex items-center justify-between gap-2')}>
                  {header}
                  {last && <CopyButton tableId={table.id} />}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {table.rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, colIdx) => (
              <TableCell
                key={colIdx}
                value={cell}
                isActive={activeCell?.row === rowIdx && activeCell.col === colIdx}
                onClick={() => setActiveCell({ row: rowIdx, col: colIdx })}
                onChange={(value) => handleCellChange(rowIdx, colIdx, value)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
