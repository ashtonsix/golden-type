import {GOLDEN_RATIO} from 'src/constants';

export const goldenScale = (fontSize, scalar) => (
  fontSize * Math.pow(GOLDEN_RATIO, scalar)
);

export const lineHeight = (fontSize, lineWidth) => (
  fontSize * (
    GOLDEN_RATIO - (
      (1 / (2 * GOLDEN_RATIO)) *
      (1 - (
        lineWidth /
        Math.pow(fontSize * GOLDEN_RATIO, 2)
      ))
    )
  )
);
