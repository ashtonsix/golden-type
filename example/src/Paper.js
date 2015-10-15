import React from 'react';
import {NEUTRAL_LIGHT} from 'golden-type/constants';
import {merge} from 'golden-type/prelude';
import {Small} from 'golden-type';

const countChildren = children => children instanceof Array ? children.length : (children ? 1 : 0);
const paperStyle = {
  boxShadow: `2px 3px 8px 1px ${NEUTRAL_LIGHT}`,
  padding: 20,
  backgroundColor: 'white',
};

export default ({children, style}) => (
  <div style={merge(paperStyle, style || {})}>
    {children}
    <Small noMargin>This component contains {countChildren(children)} children</Small>
  </div>
);
