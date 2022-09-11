import { computed, makeObservable, observable } from 'mobx';
import { iTask } from '../../types';

const key = 'mobx_tasks';

export class Store {
  tasks: iTask[] = [];

  get todos() {
    return this.tasks.filter((t) => !t.completed);
  }

  constructor() {
    makeObservable(this, {
      todos: computed,
      tasks: observable,
    });

    const tasks = localStorage.getItem(key);
    if (tasks) this.tasks = JSON.parse(tasks);
  }

  create = (label: string) => {
    this.tasks.push({
      label,
      id: String(Date.now()),
      date: new Date().toDateString(),
      completed: false,
    });

    localStorage.setItem(key, JSON.stringify(Array.from(this.tasks)));
  };

  complete = (id: string) => {
    const index = this.tasks.findIndex((t) => t.id === id);
    this.tasks[index].completed = true;

    localStorage.setItem(key, JSON.stringify(Array.from(this.tasks)));
  };
}

export const store = new Store();
