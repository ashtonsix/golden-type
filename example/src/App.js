import React, {Component} from 'react';
import {BACKGROUND} from '../../src/constants';
import Paper from './Paper';

import goldenType, {Title, Heading, SubHeading, Body, Small, Strong, Code} from '../../src';

@goldenType(16, windowWidth => windowWidth - 60)
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
          <Heading>Heading - Lorem ipsum dolor sit.</Heading>
          <SubHeading>SubHeading - Lorem ipsum dolor sit amet, consectetur adipisicing.</SubHeading>
          <Body>Body - Lorem ipsum <Strong inline uppercase>dolor sit amet</Strong>, consectetur adipisicing elit, <Code inline>sed do eiusmod tempor incididunt</Code> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Body>
          <Strong>Strong - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Strong>
          <Code>
{`import React, {Component, PropTypes} from 'react';
import {NEUTRAL_LIGHTER, NEUTRAL_DARK} from 'styles/color';
import radium from 'radium';

@radium
export default class Body extends Component {
  static propTypes = {
    children: PropTypes.string,
    language: PropTypes.string,
    style: PropTypes.object,
  }

  style = {
    fontFamily: '"Inconsolata", monospace',
    fontSize: 16,
    fontWeight: 400,
    color: NEUTRAL_DARK,
    backgroundColor: NEUTRAL_LIGHTER,
  }

  render() {
    return (
      <code>
        <pre style={[this.style, this.props.style]}>{this.props.children}</pre>
      </code>
    );
  }
}`}
          </Code>
          <Small>Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <Code inline>sed do eiusmod tempor incididunt</Code> sunt in culpa qui officia deserunt mollit anim id est laborum.</Small>
        </Paper>
      </div>
    );
  }
}
