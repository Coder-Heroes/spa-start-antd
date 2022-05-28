import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from '@ant-design/icons';
import { Space } from 'antd';

const App = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);

render(<App />, document.getElementById('root'));
