import { atom } from 'recoil';

export const TasksState = atom({
  key: 'tasks',
  default: []
});
