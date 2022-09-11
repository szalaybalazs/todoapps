import { createContext } from 'react';
import { iTask } from '../../types';

export const TodoContext = createContext<{
  todos: iTask[];
  complete: (id: string) => void;
  create: (label: string) => void;
}>({ todos: [], complete: () => {}, create: () => {} });
