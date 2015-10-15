import React, {Component} from 'react';
import {BACKGROUND} from 'golden-type/constants';
import Paper from './Paper';

import goldenType, {createFontClass, Title, SubHeading, Body, Small, Strong, Code} from 'golden-type';
import defaultConfig from 'golden-type/defaultConfig';
import {merge} from 'golden-type/prelude';

const BlueHeading = createFontClass('BlueHeading');

@goldenType(16, windowWidth => windowWidth - 60, {
  BlueHeading: merge(defaultConfig.Heading, {style: {color: 'blue'}}),
})
export default class App extends Component {
  render() {
    return (
      <div style={{
        minHeight: '100%',
        padding: 10,
        backgroundColor: BACKGROUND,
      }}>
        <Paper>
          <Title>Title - Lorem ipsum.</Title>
          <BlueHeading>BlueHeading - Lorem ipsum.</BlueHeading>
          <SubHeading style={{color: 'red'}}>Red SubHeading - Lorem ipsum dolor sit amet.</SubHeading>
          <Body>Body - Lorem ipsum <Strong inline uppercase>dolor sit amet</Strong>, consectetur adipisicing elit, <Code inline>sed do eiusmod tempor incididunt</Code> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Body>
          <Strong>Strong - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Strong>
          <Code>
{`import React from 'react';
import {NEUTRAL_LIGHT} from 'golden-type/constants';
import {merge} from 'golden-type/prelude';
import {Small} from 'golden-type';

const countChildren = children => children instanceof Array ? children.length : (children ? 1 : 0);
const paperStyle = {
  boxShadow: \`2px 3px 8px 1px $\{NEUTRAL_LIGHT\}\`,
  padding: 20,
  backgroundColor: 'white',
};

export default ({children, style}) => (
  <div style={merge(paperStyle, style || {})}>
    {children}
    <Small noMargin>This component contains {countChildren(children)} children</Small>
  </div>
);`}
          </Code>
          <Small>Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <Code inline>sed do eiusmod tempor incididunt</Code> sunt in culpa qui officia deserunt mollit anim id est laborum.</Small>
        </Paper>
        <Paper style={{backgroundColor: 'lightblue', marginTop: 10}}>
          <Title inverseColor>Title w/ inversed color</Title>
        </Paper>
      </div>
    );
  }
}
