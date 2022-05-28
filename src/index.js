import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Button } from 'antd';

const App = () => (
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
);

render(<App />, document.getElementById('root'));
