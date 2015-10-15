import React from 'react';
import {NEUTRAL_LIGHT} from '../../src/constants';
import {Small} from '../../src';

const countChildren = children => children instanceof Array ? children.length : (children ? 1 : 0);
const paperStyle = {
  boxShadow: `2px 3px 8px 1px ${NEUTRAL_LIGHT}`,
  padding: 20,
  backgroundColor: 'white',
};

export default ({children}) => (
  <div style={paperStyle}>
    {children}
    <Small noMargin>This component contains {countChildren(children)} children</Small>
  </div>
);
