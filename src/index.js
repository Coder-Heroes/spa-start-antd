import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Button, Slider, Space } from 'antd';
import { useState } from 'react';

const App = () => {
  const [size, setSize] = useState(8);
  return (
    <>
      <Slider value={size} onChange={value => setSize(value)} />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};

render(<App />, document.getElementById('root'));
