import React from 'react';
import { css } from 'glamor';
import { purple, darkGray, lightGray } from '../../style/color';
import { pinopolis } from "../../style/typefaces";

export function Button({
	onClick,
	theme,
	children
}) {
	const primaryColor = theme ? theme : purple;
	const button = css(
		pinopolis,
		{
			display: "inline-block",
			width: "auto",
			fontSize: "1em",
			borderWidth: `0.25em`,
			borderStyle: "solid",
			// borderColor: `${purple}`,
			borderColor: primaryColor,
			borderRadius: "2px",
			padding: "1em",
			transition: "all 0.2s",
			color: darkGray,
			fontWeight: "bold",
			letterSpacing: "0.05em",
			cursor: "pointer",
			minWidth: "8em",
			":hover": {
				backgroundColor: primaryColor,
				color: lightGray
			},
			" &+ button": {
				marginLeft: "2em"
			}
		}
	);

	return (
		<button
			className={ button }
			onClick={ onClick }
		>
			{ children }
		</button>
	);
}
