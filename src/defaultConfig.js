import {goldenScale} from './helpers';
import {merge} from './prelude';
import {
  NEUTRAL_LIGHTER, NEUTRAL, NEUTRAL_DARK,
  INVERSE_LIGHT, INVERSE, INVERSE_DARK,
  BASE_FONT_SIZE,
} from './constants';

export const base = {
  fontScale: 0,
  marginScale: 0,
  style: {
    display: 'block',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    color: NEUTRAL_DARK,
    marginTop: 0,
  },
  flags: {
    noMargin: {style: {marginBottom: 0}},
    inverseColor: {style: {color: INVERSE_LIGHT}},
    inline: {style: {display: 'inline'}},
    inlineBlock: {style: {display: 'inline-block'}},
  },
};

export const header = {
  style: {
    fontFamily: '"Roboto", sans-serif',
  },
};

export default {
  Title: merge(
    base,
    header,
    {
      tag: 'h1',
      fontScale: 1.5,
    }
  ),
  Heading: merge(
    base,
    header,
    {
      tag: 'h2',
      fontScale: 1,
    }
  ),
  SubHeading: merge(
    base,
    header,
    {
      tag: 'h3',
      fontScale: 0.5,
    }
  ),
  Body: merge(
    base,
    {
      tag: 'p',
    }
  ),
  Small: merge(
    base,
    {
      tag: 'small',
      fontScale: -0.5,
      marginScale: -0.5,
      style: {color: NEUTRAL},
      flags: {
        inverseColor: {color: INVERSE},
      },
    },
  ),
  Strong: merge(
    base,
    {
      tag: 'strong',
      fontScale: -(1 / 3),
      marginScale: -0.5,
      style: {fontWeight: 700},
      flags: {
        uppercase: {fontScale: -0.5, style: {textTransform: 'uppercase'}},
      },
    },
  ),
  Code: merge(
    base,
    {
      tag: 'pre',
      fontScale: -0.5,
      style: {
        lineHeight: BASE_FONT_SIZE + 'px',
        fontFamily: '"Inconsolata", monospace',
        padding: goldenScale(BASE_FONT_SIZE, -1),
        backgroundColor: NEUTRAL_LIGHTER,
      },
      flags: {
        inverseColor: {color: INVERSE_LIGHT, backgroundColor: INVERSE_DARK},
        inline: {
          tag: 'code',
          style: {padding: BASE_FONT_SIZE - goldenScale(BASE_FONT_SIZE, -0.5)},
        },
      },
    },
  ),
};
