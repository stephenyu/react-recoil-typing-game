import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { UserEnteredWordAtom } from '../keyboard/keyboard';

const extractCommon = (source: string, query: string): [string, string] => {
  let matching = "";

  const characterArray = source.split("");
  let index;

  for(index = 0; index < characterArray.length; index++) {
    if (query[index] === characterArray[index]) {
      matching += characterArray[index];
    } else {
      break;
    }
  }

  return [matching, source.slice(index)];
}

const Content = React.memo(({content, color}: {color? :string, content: string}) => <span style={{ color }}>{content}</span>);

export const Paragraph = ({content}:{content: string}) => {
  const userEnteredWord = useRecoilValue(UserEnteredWordAtom);
  const [display, useDisplay] = React.useState<JSX.Element[]>([]);

  React.useEffect(() => {
    const [matching, mismatched] = extractCommon(content, userEnteredWord);
    const incorrect = mismatched.slice(0, userEnteredWord.length - matching.length);
    const remaining = mismatched.slice(incorrect.length);
    useDisplay([<Content key="1" content={matching} color="green"/>, <Content key="2" color="red" content={incorrect} />, <Content key="3" content={remaining} />]);
  }, [content, userEnteredWord]);

  return <div>
    {display}
  </div>
}
