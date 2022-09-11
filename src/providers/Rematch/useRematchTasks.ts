import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from './store';

export const useRematchTasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<Dispatch>();

  const todos = useMemo(() => {
    return tasks.filter((t) => !t.completed);
  }, [tasks]);

  return {
    todos,
    create: (label: string) => dispatch.tasks.create(label, null),
    complete: (id: string) => dispatch.tasks.complete(id, null),
  };
};
