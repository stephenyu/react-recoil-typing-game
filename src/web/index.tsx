import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import { Keyboard } from './keyboard/keyboard';
import { Paragraph } from './paragraph/paragraph';
import { content } from './animal_farm';

const App = () => {
  return <div>
    <RecoilRoot>
      <Paragraph content={content}/>
      <Keyboard/>
    </RecoilRoot>
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
