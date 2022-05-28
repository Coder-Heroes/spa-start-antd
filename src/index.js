import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Button } from 'antd';

const App = () => (
  <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </div>
);

render(<App />, document.getElementById('root'));
