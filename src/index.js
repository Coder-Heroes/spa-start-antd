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
          message="Selected Date"
          description={date ? date.format('YYYY-MM-DD') : 'None'}
        />
        <Alert
          banner
          message={
            <TextLoop mask>
              <div>Notice message one</div>
              <div>Notice message two</div>
              <div>Notice message three</div>
              <div>Notice message four</div>
            </TextLoop>
          }
        />
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              I can be a React component, multiple React components, or just
              some text.
            </Marquee>
          }
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
