import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
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
        {visible_1 || visible_2 ? (
          <>
            <Alert
              message="Selected Date"
              description={date ? date.format('YYYY-MM-DD') : 'None'}
              type="success"
              closable
              afterClose={handleClose_1}
            />
            <Alert
              message="Alert Message Text"
              type="success"
              closable
              afterClose={handleClose_2}
            />
          </>
        ) : null}
        <p>placeholder text here</p>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
