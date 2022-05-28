import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Upload } from 'antd';

const App = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);

render(<App />, document.getElementById('root'));
