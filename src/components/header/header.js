import React, { Component } from 'react';
import { css, merge } from 'glamor';
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

export class Header extends Component {
	constructor(props) {
		super(props);
		// this.slide = 0;
		console.log(props);
		this.state = {
			visible: this.props.visible
		};
		// this.advance = this.advance.bind(this);
		// this.generateQuestions = this.generateQuestions.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		console.log("shouldComponentUpdate");
		console.log(nextProps);
		return true;
	}
	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps");
		console.log(nextProps);
	}

	render() {
		console.log(this.state);
		let headerVisible = css({
			opacity: this.props.show ? 1 : 0
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
}

// export function showHeader() {
// 	headerVisibile = css({
// 		opacity: 1
// 	})
// }

// window.showHeader = showHeader;
