import React, {PropTypes} from 'react';
import {values, mapKeys, merge, throttle} from './prelude';
import {lineHeight, goldenScale} from './helpers';

export default fontClass => (
  React.createClass({
    propTypes: {style: PropTypes.object},

    contextTypes: {
      goldenType: PropTypes.shape({
        baseFontSize: PropTypes.number,
        baseContentWidth: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.func,
        ]),
        fontConfig: PropTypes.object,
      }),
    },

    getInitialState() { return {baseContentWidth: this.getBaseContentWidth()}; },
    getBaseContentWidth() {
      const {goldenType: {baseContentWidth}} = this.context;
      return typeof baseContentWidth === 'function' ?
        baseContentWidth(window.innerWidth) :
        baseContentWidth;
    },

    updateDimensions() { this.setState({baseContentWidth: this.getBaseContentWidth()}); },
    componentWillMount() { this.updateDimensionsThrottled = throttle(this.updateDimensions, 500); },
    componentDidMount() { window.addEventListener('resize', this.updateDimensionsThrottled); },
    componentWillUnmount() { window.removeEventListener('resize', this.updateDimensionsThrottled); },

    render() {
      const {baseContentWidth} = this.state;
      const {goldenType: {baseFontSize, fontConfig}} = this.context;
      const config = merge(
        fontConfig[fontClass],
        ...values(mapKeys(
          this.props,
          f => ((fontConfig[fontClass]).flags || {})[f],
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
        config.tag || 'p',
        {...this.props, style}
      );
    },
  })
);
