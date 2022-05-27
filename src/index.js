import React, { useState } from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import { Card } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const App = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);

render(<App />, document.getElementById('root'));
