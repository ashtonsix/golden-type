import React, {PropTypes} from 'react';

import {BASE_FONT_SIZE, BASE_CONTENT_WIDTH} from './constants';
import defaultConfig from './defaultConfig';
import {merge} from './prelude';

export default (
  baseFontSize = BASE_FONT_SIZE,
  baseContentWidth = BASE_CONTENT_WIDTH,
  fontConfig = defaultConfig
) => Component => (
  React.createClass({
    childContextTypes: {
      goldenType: PropTypes.shape({
        baseFontSize: PropTypes.number,
        baseContentWidth: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.func,
        ]),
        fontConfig: PropTypes.object,
      }),
    },

    getChildContext() {
      return {goldenType: {
        baseFontSize, baseContentWidth,
        fontConfig: merge(defaultConfig, fontConfig),
      }};
    },

    render() {
      return <Component {...this.props}/>;
    },
  })
);
