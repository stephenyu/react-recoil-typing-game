import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { TasksState } from '../atoms/tasks.atom';

interface ListTasksProps {
  tasks: string[];
}

const InnerListTasks = ({tasks}: ListTasksProps) => {
  return <div>
    <h3>Tasks</h3>
    <ul>
      {tasks.map(task => <li key={task}>{task}</li>)}
    </ul>
  </div>
}

export const ListTasks = () => {
  const tasks = useRecoilValue(TasksState);

  return <InnerListTasks tasks={tasks} />
}


