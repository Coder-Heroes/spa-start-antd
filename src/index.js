import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import React from 'react';
import { Grid, Tag } from 'antd';
const { useBreakpoint } = Grid;

const App = () => {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
};

render(<App />, document.getElementById('root'));
