import React, { useState } from 'react';
import { render } from 'react-dom';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

render(<App />, document.getElementById('root'));
