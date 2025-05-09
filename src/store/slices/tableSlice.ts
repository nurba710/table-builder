import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITable, ITableColumns } from 'shared/consts/types';

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
      };
      state.tables.push(newTable);
    },
  },
});

export const { createTable } = tableSlice.actions;
export default tableSlice.reducer;
