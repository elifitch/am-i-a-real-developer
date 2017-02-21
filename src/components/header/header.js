import React from 'react';
import { css, merge } from 'glamor';
import { alpha } from "../../style/components/type";
import { secondary } from "../../style/color";
import { threeDText } from "../../style/mixins";

let header = css({
	label: "header",
	position: "absolute",
	width: "100%",
	top: 0,
	paddingTop: "1rem",
	paddingBottom: "1rem",
	textAlign: "center",
	fontSize: "0.6em",
	opacity: 1,
	transition: "opacity 1s",
	'@media screen and (min-width: 670px)': {
		fontSize: "0.3em",
		paddingTop: "2rem",
		paddingBottom: "2rem",
	}
});

let header__logo = css(
	alpha,
	{
		'&&': {
			label: "header__logo",
			textShadow: threeDText(secondary, 4)
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
