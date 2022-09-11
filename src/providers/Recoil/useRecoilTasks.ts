import { useEffect } from 'react';
import {
  selector,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
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
        const tasks = [...(await snapshot.getPromise(tasksState))];

        const index = tasks.findIndex((t) => t.id === id);
        tasks[index] = { ...tasks[index], completed: true };

        localStorage.setItem(key, JSON.stringify(tasks));
        set(tasksState, tasks);
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
