import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Button, Dropdown, Menu } from 'antd';

const onMenuClick = e => {
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item',
      },
      {
        key: '2',
        label: '2nd item',
      },
      {
        key: '3',
        label: '3rd item',
      },
    ]}
  />
);

const App = () => (
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
  </>
);

render(<App />, document.getElementById('root'));
