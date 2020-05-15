import * as React from 'react';

interface InputTaskProps {
    onSubmit: (task: string) => void;
}

export const InputTask = ({onSubmit}: InputTaskProps) => {
  const [value, setValue] = React.useState<string>('');

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  }, []);

  const onSave = React.useCallback(() => onSubmit(value), []);

  return <>
    <input type="text" value={value} onChange={onChange}/>
    <button onClick={onSave}>Save</button>
  </>
}
