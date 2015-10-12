export const GOLDEN_RATIO = (Math.pow(5, 0.5) + 1) / 2;

export const BASE_FONT_SIZE = 16;
export const BASE_CONTENT_WIDTH = 850;

const neutralVariations = opacity => `rgba(0,0,0,${opacity})`;

export const NEUTRAL_LIGHTER = neutralVariations(0.07);
export const NEUTRAL_LIGHT = neutralVariations(0.17);
export const NEUTRAL = neutralVariations(0.54);
export const NEUTRAL_DARK = neutralVariations(0.87);

const inverseVariations = opacity => `rgba(255,255,255,${opacity})`;

export const INVERSE_LIGHT = inverseVariations(1);
export const INVERSE = inverseVariations(0.7);
export const INVERSE_DARK = inverseVariations(0.4);
