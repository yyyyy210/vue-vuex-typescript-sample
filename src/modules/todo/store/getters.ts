import { DefineGetters } from 'vuex-type-helper';
import { Todo } from '../data/todo';
import { TodoState } from './state';

export interface TodoGetters {
  reverse: Todo[];
  latest: (limit: number) => Todo[];
}

export const getters: DefineGetters<TodoGetters, TodoState> = {
  reverse: (state) => [...state.todos].reverse(),
  latest: (state, that) => ((limit) => {
    return that.reverse.slice(0, limit - 1);
  }),
};
