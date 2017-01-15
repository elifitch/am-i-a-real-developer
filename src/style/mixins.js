import tinycolor from 'tinycolor2';

export function threeDText(color, depth) {
	let style = "";
	let shadowColor = tinycolor(color);
	for (let i = 1; i <= depth; i++) {
		let outputColor = shadowColor.darken(0.05 * i).toString();
		let comma = i < depth ? ',' : '';
		style += ` ${i}px ${i}px 0px ${outputColor}${comma}`;
	}

	return style;
}