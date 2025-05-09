import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITable, ITableColumns } from 'shared';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    tables: [] as ITable[],
  },
  reducers: {
    createTable: (state, action: PayloadAction<ITableColumns>) => {
      const newTable: ITable = {
        id: Date.now().toString(),
        columns: action.payload,
        rows: Array.from({ length: 4 }, () => Object.keys(action.payload).map(() => '')),
      };
      state.tables.push(newTable);
    },
    updateCell: (
      state,
      action: PayloadAction<{
        tableId: string;
        rowIndex: number;
        colIndex: number;
        value: string;
      }>,
    ) => {
      const table = state.tables.find((t) => t.id === action.payload.tableId);
      if (table) {
        table.rows[action.payload.rowIndex][action.payload.colIndex] = action.payload.value;
      }
    },
    createCopy: (state, action: PayloadAction<string>) => {
      const original = state.tables.find((t) => t.id === action.payload);
      if (original) {
        const copy: ITable = {
          ...original,
          id: Date.now().toString(),
          rows: original.rows.map((row) => [...row]),
        };
        state.tables.push(copy);
      }
    },
    changeTableOrder: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      const movedTable = state.tables.splice(oldIndex, 1)[0];
      state.tables.splice(newIndex, 0, movedTable);
    },
  },
});

export const { createTable, updateCell, createCopy, changeTableOrder } = tableSlice.actions;
export default tableSlice.reducer;
