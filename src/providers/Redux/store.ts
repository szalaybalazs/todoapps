import { configureStore, createSlice } from '@reduxjs/toolkit';
import { iTask } from '../../types';
import { tasksSlice } from './slice';

export const key = 'tasks-redux';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
