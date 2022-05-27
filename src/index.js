import React, { useState } from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import { Card } from 'antd';

const App = () => (
  <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
);

render(<App />, document.getElementById('root'));
