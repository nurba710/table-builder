import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
