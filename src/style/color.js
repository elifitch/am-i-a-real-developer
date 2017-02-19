import { css } from 'glamor';
import tinycolor from 'tinycolor2';

// export const primary = "#8000FF"; 👌
export const primary = "#00ffa5"; //happy green 👌
// export const primary = "#FF00CF"; // magenta
export const primaryRGB = tinycolor(primary).toRgb();

// export const yellow = "#ffef2c"; // pure yellow
// export const yellow = "#ffdf2c"; // gold
// export const secondary = "#f9df07"; // darker yellow 👌
export const secondary = "#00ccff"; // soft blue 👌
// export const secondary = "#ACFF40"; // electric green
export const secondaryRGB = tinycolor(secondary).toRgb();

export const lightGray = "#eeeeee";
export const darkGray = "#333333";

export const primaryBg = css({
	backgroundColor: primary
});
export const secondaryBg = css({
	backgroundColor: secondary
});
