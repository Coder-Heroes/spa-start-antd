import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Button, Alert } from 'antd';

import Marquee from 'react-fast-marquee';
import { TextLoop } from 'react-text-loop-next';
import 'antd/dist/antd.css';
import './index.css';

const { ErrorBoundary } = Alert;

const ThrowError = () => {
  const [error, setError] = useState();

  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

const App = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

export default App;

render(<App />, document.getElementById('root'));
