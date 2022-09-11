import { useContext } from 'react';
import { TodoContext } from './context';

export const useContextTasks = () => useContext(TodoContext);
