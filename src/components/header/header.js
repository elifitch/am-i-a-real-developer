import React, { Component } from 'react';
import { css } from 'glamor';
import { alpha } from "../../style/components/type";
import { yellow, purple } from "../../style/color";
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

let headerVisibile = css({
	opacity: 0
});

export class Header extends Component {
	render() {
		return (
			<header { ...header }>
				<div className="row">
					<div className="column small-12 u-text-center">
						<div {...header__logo}>AIARD?</div>
					</div>
				</div>
			</header>
		);
	}
}

// export function showHeader() {
// 	headerVisibile = css({
// 		opacity: 1
// 	})
// }

// window.showHeader = showHeader;
