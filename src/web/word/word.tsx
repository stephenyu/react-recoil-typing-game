import * as React from 'react';
import { useRecoilValue } from 'recoil';

import {UserEnteredWordAtom} from './../keyboard/keyboard';

export const Word = ({word}: {word: string}) => {
  const userWord = useRecoilValue(UserEnteredWordAtom);

  return <div>
    <div>{word}</div>
    <div>{userWord}</div>
  </div>;
}

