import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Col, Row } from 'antd';

const App = () => (
  <Row>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      Col
    </Col>
    <Col
      xs={{
        span: 11,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      Col
    </Col>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      Col
    </Col>
  </Row>
);

render(<App />, document.getElementById('root'));
