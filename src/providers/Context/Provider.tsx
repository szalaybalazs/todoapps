import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { iTask } from '../../types';
import { TodoContext } from './context';

interface iContextProviderProps {
  children: ReactNode;
}

const key = '@tasks';

const ContextProvider: FC<iContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<iTask[]>([]);

  const _handleComplete = useCallback(
    (id: string) => {
      const _tasks = [...tasks];
      const index = _tasks.findIndex((t) => t.id === id);
      _tasks[index].completed = true;
      setTasks(_tasks);
      localStorage.setItem(key, JSON.stringify(_tasks));
    },
    [tasks],
  );

  const _handleCreate = useCallback(
    (label: string) => {
      const _tasks = [
        ...tasks,
        { label, id: String(Date.now()), completed: false, date: new Date() },
      ];
      console.log(_tasks, tasks);
      setTasks(_tasks);
      localStorage.setItem(key, JSON.stringify(_tasks));
    },
    [tasks],
  );

  useEffect(() => {
    const _tasks = localStorage.getItem(key);
    if (_tasks) setTasks(JSON.parse(_tasks));
  }, []);

  const todos = useMemo(() => {
    return tasks.filter((task) => !task.completed);
  }, [tasks]);
  return (
    <TodoContext.Provider
      value={{ todos, complete: _handleComplete, create: _handleCreate }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default ContextProvider;
