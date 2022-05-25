import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert, Button, Space } from 'antd';
import Marquee from 'react-fast-marquee';
import { TextLoop } from 'react-text-loop-next';
import 'antd/dist/antd.css';
import './index.css';

const onClose = e => {
  console.log(e, 'I was closed.');
};

const App = () => {
  const [visible_1, setVisible_1] = useState(true);
  const handleClose_1 = () => {
    setVisible_1(false);
  };
  const [visible_2, setVisible_2] = useState(true);
  const handleClose_2 = () => {
    setVisible_2(false);
  };
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="Success Tips"
          type="success"
          showIcon
          action={
            <Button size="small" type="text">
              UNDO
            </Button>
          }
          closable
        />
        <Alert
          message="Error Text"
          showIcon
          description="Error Description Error Description Error Description Error Description"
          type="error"
          action={
            <Button size="small" danger>
              Detail
            </Button>
          }
        />
        <Alert
          message="Warning Text"
          type="warning"
          action={
            <Space>
              <Button size="small" type="ghost">
                Done
              </Button>
            </Space>
          }
          closable
        />
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
          action={
            <Space direction="vertical">
              <Button size="small" type="primary">
                Accept
              </Button>
              <Button size="small" danger type="ghost">
                Decline
              </Button>
            </Space>
          }
          closable
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
