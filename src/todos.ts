import { iTask } from './types';

export const defaultTodos: iTask[] = [
  {
    label: 'Read work emails',
    id: 'task-1',
    date: new Date().toDateString(),
    completed: false,
  },
  {
    label: 'Call Amy',
    id: 'task-2',
    date: new Date().toDateString(),
    completed: false,
  },
  {
    label: 'Send pitch deck to prospect',
    id: 'task-3',
    date: new Date().toDateString(),
    completed: false,
  },
  {
    label: 'Draft new website homepage',
    id: 'task-4',
    date: new Date().toDateString(),
    completed: false,
  },
  {
    label: 'File monthly expenses',
    id: 'task-5',
    date: new Date().toDateString(),
    completed: false,
  },
];
