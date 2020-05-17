import * as React from 'react';
import { useSetRecoilState, atom } from 'recoil';

const Key = ({label, pressed}: {pressed: boolean, label: string}) => <span style={{ color: pressed && "red" }}>{label}</span>;

export const UserEnteredWordAtom = atom({
  key: 'userEnteredWord',
  default: []
});

const keyboardLayout = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm",
  ",.?",
];

interface KeyboardRowProps {
  characters: string;
  keysPressed: Set<string>;
}

const KeyboardRow = ({characters, keysPressed}: KeyboardRowProps) => {
  return (
    <div>
      {characters.split('').map((letter, index) => <Key key={index} label={letter} pressed={keysPressed.has(letter)} />)}
    </div>
  );
}

export const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = React.useState<Set<string>>(new Set);
  const setUserEnteredWord = useSetRecoilState(UserEnteredWordAtom);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key.length === 1) {
      setPressedKeys(prevKeys => new Set([...prevKeys, event.key.toLowerCase()]));
      setUserEnteredWord(previousEnteredWord => [...previousEnteredWord, event.key]);
    } else if (event.key === 'Backspace') {
      setUserEnteredWord(previousEnteredWord => previousEnteredWord.slice(0, -1));
    }
  }

  const handleKeyup = (event: KeyboardEvent) => {
    if (event.key.length === 1) {
      setPressedKeys(prevKeys => {
        const newKeys = new Set([...prevKeys]);
        newKeys.delete(event.key.toLowerCase());
        return newKeys;
      });
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  }, []);

  const keyboardElements = keyboardLayout.map((keyboardRow, index) => <KeyboardRow characters={keyboardRow} key={index} keysPressed={pressedKeys} />);

  return <div>{keyboardElements}</div>
}
