import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
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
        <Alert message="Success Text" type="success" />
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
          onClose={onClose}
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={onClose}
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
