import { createSlice } from '@reduxjs/toolkit';
import { iTask } from '../../types';
import { key } from './store';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [] as iTask[],
  },
  reducers: {
    set: (state, action) => {
      const tasks = action.payload.tasks;
      state.tasks = Array.isArray(tasks) ? tasks : [];
    },
    create: (state, action) => {
      state.tasks.push({
        label: action.payload.trim(),
        id: String(Date.now()),
        completed: false,
        date: new Date().toDateString(),
      });

      localStorage.setItem(key, JSON.stringify(state));
    },
    complete: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload);
      state.tasks[index].completed = true;

      localStorage.setItem(key, JSON.stringify(state));
    },
  },
});
