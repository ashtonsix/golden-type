import goldenDecorator from 'src/goldenDecorator';
import defaultConfig from 'src/defaultConfig';
import generateTypeStyles from 'src/generateTypeStyles';

export default goldenDecorator;

const typeStyles = generateTypeStyles(defaultConfig);

export const Title = typeStyles.Title;
export const Heading = typeStyles.Heading;
export const SubHeading = typeStyles.SubHeading;
export const Body = typeStyles.Body;
export const Small = typeStyles.Small;
export const Strong = typeStyles.Strong;
export const Code = typeStyles.Code;

// Other tags, makes pre-compilation easier
export const Paragraph = typeStyles.Paragraph;

export const H1 = typeStyles.H1;
export const H2 = typeStyles.H2;
export const H3 = typeStyles.H3;
export const H4 = typeStyles.H4;
export const H5 = typeStyles.H5;
export const H6 = typeStyles.H6;
export const P = typeStyles.P;
