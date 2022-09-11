import { atom } from 'recoil';
import { iTask } from '../../types';

export const tasks = atom({
  key: 'tasks',
  default: [] as iTask[],
});
