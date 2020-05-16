import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRecoilState, RecoilRoot } from 'recoil';

import { TasksState } from './atoms/tasks.atom';

import { ListTasks } from './list_tasks/list_tasks';
import { InputTask } from './input_task/input_task';

const LocationHandler = (): JSX.Element => {
  const [tasks, setTasks] = useRecoilState(TasksState);

  React.useEffect(() => {
    const hash = decodeURI(location.hash);
    if (hash) {
      const match = hash.match(/#(.*)/);
      const tasks = match[1].split(',');
      setTasks(tasks);
    }
  }, []);


  React.useEffect(() => {
    if (tasks.length > 0) {
      const urlData = tasks.join(',');
      const url = location.origin + location.pathname + `#${urlData}`;
      location.href = encodeURI(url);
    }
  }, [tasks]);

  return null;
}

const App = () => {
  return <div>
    <RecoilRoot>
      <LocationHandler/>
      <ListTasks/>
      <InputTask/>
    </RecoilRoot>
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
