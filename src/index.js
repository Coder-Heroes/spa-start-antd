import React, { useState } from 'react';
import { render } from 'react-dom';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);

render(<App />, document.getElementById('root'));
