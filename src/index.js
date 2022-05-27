import React, { useState } from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import { Card, Col, Row } from 'antd';

const App = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

render(<App />, document.getElementById('root'));
