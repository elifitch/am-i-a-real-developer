import React from 'react';
import { css, merge } from 'glamor';
import { alpha } from "../../style/components/type";
import { yellow, } from "../../style/color";
import { threeDText } from "../../style/mixins";

let header = css({
	label: "header",
	position: "absolute",
	width: "100%",
	top: 0,
	paddingTop: "2rem",
	paddingBottom: "2rem",
	textAlign: "center",
	fontSize: "0.2em",
	opacity: 1,
	transition: "opacity 1s",
	'@media screen and (min-width: 640px)': {
		fontSize: "0.3em"
	}
});

let header__logo = css(
	alpha,
	{
		'&&': {
			label: "header__logo",
			textShadow: threeDText(yellow, 4)
		}
	}
);

export function Header({visible}) {
	let headerVisible = css({
		opacity: visible ? 1 : 0
	});

	return (
		<header { ...merge(header, headerVisible) }>
			<div className="row">
				<div className="column small-12 u-text-center">
					<div {...header__logo}>AIARD?</div>
				</div>
			</div>
		</header>
	);
}
