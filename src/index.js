import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Typography } from 'antd';
const { Title } = Typography;

const App = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>
);

render(<App />, document.getElementById('root'));
