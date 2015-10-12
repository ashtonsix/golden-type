import React, {PropTypes} from 'react';
import {zip, values, mapKeys, merge, throttle} from 'src/prelude';
import {lineHeight, goldenScale} from 'src/helpers';

export default defaultConfig => zip(
  Object.keys(defaultConfig),
  Object.keys(defaultConfig).map(k => defaultConfig[k]).map(c => (
    React.createClass({
      propTypes: {style: PropTypes.object},

      contextTypes: {
        baseFontSize: PropTypes.number,
        baseContentWidth: PropTypes.oneOfType(
          PropTypes.number,
          PropTypes.func,
        ),
      },

      getInitialState() { return {baseContentWidth: this.getBaseContentWidth()}; },
      getBaseContentWidth() {
        const {baseContentWidth} = this.context;
        return typeof baseContentWidth === 'function' ?
          baseContentWidth(window.innerWidth) :
          baseContentWidth;
      },

      updateDimensions() { this.setState({baseContentWidth: this.getBaseContentWidth()}); },
      componentWillMount() { this.updateDimensionsThrottled = throttle(this.updateDimensions, 200); },
      componentDidMount() { window.addEventListener('resize', this.updateDimensionsThrottled); },
      componentWillUnmount() { window.removeEventListener('resize', this.updateDimensionsThrottled); },

      render() {
        const {baseContentWidth} = this.state;
        const {baseFontSize} = this.context;
        const config = merge(
          c,
          ...values(mapKeys(
            this.props,
            f => (c.flags || {})[f],
            f => f
          ))
        );
        const fontSize = goldenScale(baseFontSize, config.fontScale);
        const style = merge(
          mapKeys({
            fontSize,
            lineHeight: Math.round(lineHeight(fontSize, baseContentWidth)) + 'px',
            marginBottom: goldenScale(
              lineHeight(baseFontSize, baseContentWidth),
              config.marginScale
            ),
          }, (k, v) => typeof v === 'number' ? Math.round(v) : v),
          config.style,
          this.props.style,
        );

        return React.createElement(
          config.tag,
          {...this.props, style}
        );
      },
    })
  )),
);
