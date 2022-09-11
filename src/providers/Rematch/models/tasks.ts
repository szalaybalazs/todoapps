import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { iTask } from '../../../types';

export const tasks = createModel<RootModel>()({
  state: [] as iTask[], // initial state
  reducers: {
    // handle state changes with pure functions

    create: (state, label: string) => {
      console.log('creating');

      return [
        ...state,
        {
          label,
          id: String(Date.now()),
          completed: false,
          date: new Date().toDateString(),
        },
      ];
    },
    complete: (state, id: string) => {
      const index = state.findIndex((t) => t.id === id);
      state[index].completed = true;
      return [...state];
    },
  },
  // effects: (dispatch) => ({
  //   // handle state changes with impure functions.
  //   // use async/await for async actions
  //   async incrementAsync(payload: number, state) {
  //     console.log('This is current root state', state);
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     dispatch.count.increment(payload);
  //   },
  // }),
});
