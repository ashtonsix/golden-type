import React, {PropTypes} from 'react';

import {BASE_FONT_SIZE, BASE_CONTENT_WIDTH} from 'src/constants';
import defaultConfig from 'src/defaultConfig';

export default (
  baseFontSize = BASE_FONT_SIZE,
  baseContentWidth = BASE_CONTENT_WIDTH,
  fontConfig = defaultConfig
) => Component => (
  React.createClass({
    childContextTypes: {
      goldenType: PropTypes.shape(
        {
          baseFontSize: PropTypes.number,
          baseContentWidth: PropTypes.oneOfType(
            PropTypes.number,
            PropTypes.func,
          ),
          fontConfig: PropTypes.object,
        }
      ),
    },

    getChildContext() {
      return {goldenType: {
        baseFontSize, baseContentWidth,
        fontConfig: {...defaultConfig, ...fontConfig},
      }};
    },

    render() {
      return <Component {...this.props}/>;
    },
  })
);
