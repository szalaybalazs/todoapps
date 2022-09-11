import { atom } from 'recoil';
import { defaultTodos } from '../../todos';
import { iTask } from '../../types';

export const tasks = atom({
  key: 'tasks',
  default: defaultTodos as iTask[],
});
