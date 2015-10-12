import React, {PropTypes} from 'react';

import {BASE_FONT_SIZE, BASE_CONTENT_WIDTH} from 'src/constants';
import defaultConfig from 'src/defaultConfig';

export default (
  baseFontSize = BASE_FONT_SIZE,
  baseContentWidth = BASE_CONTENT_WIDTH,
  config = defaultConfig
) => ReactClass => (
  React.createClass({
    childContextTypes: {
      baseFontSize: PropTypes.number,
      baseContentWidth: PropTypes.oneOfType(
        PropTypes.number,
        PropTypes.func,
      ),
    },

    getChildContext() {
      return {baseFontSize, baseContentWidth};
    },

    render() {
      return <ReactClass {...this.props}/>;
    },
  })
);
