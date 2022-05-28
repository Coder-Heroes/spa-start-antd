import { render } from 'react-dom';

import React from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Typography } from 'antd';
const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text
      style={{
        maxWidth: '100%',
      }}
      ellipsis={{
        suffix,
      }}
    >
      {start}
    </Text>
  );
};

const App = () => (
  <EllipsisMiddle suffixCount={12}>
    In the process of internal desktop applications development, many different
    design specs and implementations would be involved, which might cause
    designers and developers difficulties and duplication and reduce the
    efficiency of development.
  </EllipsisMiddle>
);

render(<App />, document.getElementById('root'));
