import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iTask } from '../../types';
import { tasksSlice } from './slice';
import { key } from './store';

export const useReduxTasks = () => {
  const { create, complete, set } = tasksSlice.actions;
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const dispatch = useDispatch();

  const todos: iTask[] = useMemo(
    () => tasks?.filter?.((t: iTask) => !t.completed) ?? [],
    [tasks],
  );

  useEffect(() => {
    const _tasks = localStorage.getItem(key);
    if (_tasks) dispatch(set(JSON.parse(_tasks)));
  }, []);

  return {
    todos,
    create: (label: string) => dispatch(create(label)),
    complete: (id: string) => dispatch(complete(id)),
  };
};
