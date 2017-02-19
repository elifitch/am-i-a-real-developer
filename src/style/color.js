import { css } from 'glamor';
import tinycolor from 'tinycolor2';

const happyGreen = "#00ffa5";
const electricGreen = "#ACFF40";
const purple = "#8000FF";
const lighterPurple = "#9738f5";
const softBlue = "#00ccff";
const magenta = "#FF00CF";
const pureYellow = "#ffef2c";
const darkerYellow = "#f9df07";
const gold = "#ffdf2c";

export const primary = lighterPurple;
export const primaryHSL = tinycolor(primary).toHsl();

export const secondary = happyGreen;
export const secondaryHSL = tinycolor(secondary).toHsl();

export const lightGray = "#eeeeee";
export const darkGray = "#333333";

export const primaryBg = css({
	backgroundColor: primary
});
export const secondaryBg = css({
	backgroundColor: secondary
});
