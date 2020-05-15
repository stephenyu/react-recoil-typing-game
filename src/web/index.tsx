import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useRecoilState, RecoilRoot } from 'recoil';

import { Task } from './task/task';
import { InputTask } from './input_task/input_task';
import { TaskState } from './atoms/task.atom';

const CurrentTask = () => {
  const [task] = useRecoilState(TaskState);
  return <span>Current Task is {task}</span>
}

const App = () => {
  const
  return <div>
    <RecoilRoot>
      <InputTask onSubmit={() => void 0}/>
      <CurrentTask />
    </RecoilRoot>
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
