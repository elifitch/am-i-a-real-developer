import React from 'react';
import { css } from 'glamor';
import tinycolor from 'tinycolor2';
import { purple, darkGray, lightGray } from '../../style/color';
import { pinopolis, brandon } from "../../style/typefaces";

const button = css(
	pinopolis,
	{
		display: "inline-block",
		width: "auto",
		fontSize: "1em",
		border: `0.25em solid ${purple}`,
		borderRadius: "2px",
		padding: "1em",
		transition: "all 0.2s",
		color: darkGray,
		fontWeight: "bold",
		letterSpacing: "0.05em",
		cursor: "pointer",
		":hover": {
			backgroundColor: purple,
			color: lightGray
		}
	}
);

export function Button({
	content,
	onClick
}) {
	return (
		<button
		className={ button }
		onClick={ onClick }>
			{ content }
		</button>
	);
}
