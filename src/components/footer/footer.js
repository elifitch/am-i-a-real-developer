import React from 'react';
import { css } from 'glamor';
// import { threeDText } from '../mixins';
import { purple, yellow, lightGray } from '../../style/color';
import tinycolor from 'tinycolor2';
import { beta } from "../../style/components/type";

const footer = css({
	position: "absolute",
	right: 0,
	bottom: 0,
	left: 0,
	paddingTop: "2rem",
	paddingBottom: "2rem",
	textAlign: "center",
	color: "rgba(0,0,0,0.1)"
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
					<a href="http://eli.wtf" className={ `${beta} ${footer__link}` } target="_blank">@elifitch</a>
				</div>
			</div>
		</footer>
	);
}
