import { Models } from '@rematch/core';
import { tasks } from './tasks';

export interface RootModel extends Models<RootModel> {
  tasks: typeof tasks;
}
export const models: RootModel = { tasks };
