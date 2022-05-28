import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Button, Space } from 'antd';

const App = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((
      _,
      index // eslint-disable-next-line react/no-array-index-key
    ) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

render(<App />, document.getElementById('root'));
