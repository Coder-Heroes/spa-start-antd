import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

const App = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);

render(<App />, document.getElementById('root'));
