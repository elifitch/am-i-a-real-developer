import React from 'react';
import { css } from 'glamor';
import { primary, darkGray, lightGray } from '../../style/color';
import { pinopolis } from "../../style/typefaces";

export function Button({
	onClick,
	href,
	theme,
	children
}) {
	const primaryColor = theme ? theme : primary;
	const buttonStyle = css(
		pinopolis,
		{
			display: "inline-block",
			width: "auto",
			fontSize: "1em",
			borderWidth: `0.25em`,
			borderStyle: "solid",
			borderColor: primaryColor,
			borderRadius: "2px",
			padding: "1em",
			transition: "background-color 0.2s, color 0.2s",
			color: darkGray,
			fontWeight: "bold",
			letterSpacing: "0.05em",
			cursor: "pointer",
			minWidth: "8em",
			marginBottom: "1em",
			":hover": {
				backgroundColor: primaryColor,
				color: lightGray
			},
			" &+ button": {
				marginLeft: "2em"
			}
		}
	);
	
	if (href) {
			return (
				<a
	 				className={ buttonStyle }
	 				onClick={ onClick }
	 				href={ href }
	 				target="_blank"
	 			>
	 				{ children }
	 			</a>
	 		);
	} else {
		return (
			<button
				className={ buttonStyle }
				onClick={ onClick }
			>
				{ children }
			</button>
		);
	}
}

