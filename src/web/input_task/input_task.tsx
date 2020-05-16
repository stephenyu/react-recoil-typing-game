import * as React from 'react';
import { useRecoilState } from 'recoil';

import { TasksState } from '../atoms/tasks.atom';

interface InputTaskProps {
  onSubmit: (task: string) => void;
}

export const InnerInputTask = ({onSubmit}: InputTaskProps) => {
  const [value, setValue] = React.useState<string>('');

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  }, []);

  const onSave = React.useCallback(() => {
    onSubmit(value);
    setValue('');
  }, [value]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      onSave();
    }
  }

  return <>
    <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    <button onClick={onSave}>Save</button>
  </>
}

export const InputTask = () => {
  const [tasks, setTasks] = useRecoilState(TasksState);

  const onSubmit = (task: string) => {
    setTasks([...tasks, task]);
  }

  return <InnerInputTask onSubmit={onSubmit} />
}
