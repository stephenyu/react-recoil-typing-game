import * as React from 'react';
import { useRecoilState } from 'recoil';

import { TaskState } from '../atoms/task.atom';

export const Task = () => {
  const [task, setTask] = useRecoilState(TaskState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTask(value);
  }
  return <input type="text" value={task} onChange={onChange}/>;
}
