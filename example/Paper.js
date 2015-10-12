import React, {Component, PropTypes} from 'react';
import {NEUTRAL_LIGHT} from 'src/constants';
import {Small} from 'src';

export default class Paper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType(
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ),
  }

  countChildren() {
    const {children} = this.props;
    return children instanceof Array ? children.length : (children ? 1 : 0);
  }

  render() {
    return (
      <div style={{
        boxShadow: `2px 3px 8px 1px ${NEUTRAL_LIGHT}`,
        padding: 20,
        backgroundColor: 'white',
      }}>
        {this.props.children}
        <Small noMargin>This sheet contains {this.countChildren()} children</Small>
      </div>
    );
  }

}
