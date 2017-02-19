import React from 'react';
import { css } from 'glamor';
// import { mq } from '../../style/mixins';
import { purple } from '../../style/color';
import { beta } from "../../style/components/type";

// const medium = mq("medium");

const footer = css({
	position: "absolute",
	right: 0,
	bottom: 0,
	left: 0,
	paddingTop: "1rem",
	paddingBottom: "1rem",
	textAlign: "center",
	color: "rgba(0,0,0,0.1)",
	fontSize: "0.6em",
	'@media screen and (min-width: 640px)': {
		fontSize: "1em",
		paddingTop: "2rem",
		paddingBottom: "2rem",
	}
});

const footer__link = css({
	'transition': 'color 0.2s',
	':hover': {
		color: purple
	}
})

export function Footer() {
	return (
		<footer className={ footer }>
			<div className="row">
				<div className="column small-6 u-text-left">
					<a href="http://eli.wtf" className={ `${beta} ${footer__link}` } target="_blank">Eli.wtf</a>
				</div>
				<div className="column small-6 u-text-right">
					<a href="https://twitter.com/elifitch" className={ `${beta} ${footer__link}` } target="_blank">@elifitch</a>
				</div>
			</div>
		</footer>
	);
}
