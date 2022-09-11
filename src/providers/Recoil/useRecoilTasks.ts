import { useEffect } from 'react';
import {
  selector,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { iTask } from '../../types';
import { key } from './key';
import { tasks as tasksState } from './tasks';

const todoSelector = selector({
  key: 'todos', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const tasks = get(tasksState);
    return tasks.filter((t) => !t.completed);
  },
});

export const useRecoilTasks = () => {
  const todos = useRecoilValue(todoSelector);

  const _handleCreate = useRecoilCallback(
    ({ snapshot, set }) =>
      async (label: string) => {
        const tasks = await snapshot.getPromise(tasksState);
        const _tasks = [
          ...tasks,
          {
            label,
            id: String(Date.now()),
            date: new Date().toDateString(),
            completed: false,
          },
        ];

        localStorage.setItem(key, JSON.stringify(_tasks));
        set(tasksState, _tasks);
      },
    [],
  );
  const _handleComplete = useRecoilCallback(
    ({ snapshot, set }) =>
      async (id: string) => {
        const initialTasks = await snapshot.getPromise(tasksState);
        const taskList: iTask[] = JSON.parse(JSON.stringify(initialTasks));

        const index = taskList.findIndex((t) => t.id === id);
        if (taskList) taskList[index].completed = true;

        localStorage.setItem(key, JSON.stringify(taskList));
        set(tasksState, taskList);
      },
    [],
  );
  const _handleLoad = useRecoilCallback(
    ({ set }) =>
      async () => {
        const tasks = localStorage.getItem(key);
        if (tasks) set(tasksState, JSON.parse(tasks));
      },
    [],
  );

  useEffect(() => {
    _handleLoad();
  }, []);

  return {
    todos,
    create: (label: string) => _handleCreate(label),
    complete: (id: string) => _handleComplete(id),
  };
};
