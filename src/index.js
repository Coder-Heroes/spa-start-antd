import React, { useState } from 'react';
import { render } from 'react-dom';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App = () => (
  <>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);

render(<App />, document.getElementById('root'));
