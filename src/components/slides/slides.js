import React, { Component } from 'react';
import { css } from 'glamor';
import { alpha } from '../../style/components/type';
import { Button } from '../button/button';
import { Slide } from './slide';

// const intro = css({
// 	display: "inline-flex",
// 	flexDirection: "column",
// 	position: "absolute",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)"
// });

const slides = css({
	height: "100vh",
	width: "100vw",
	overflow: "hidden"
});

const slides__carrier = css({
	transition: "all 1s"
});

// const slides__slide = css({
// 	height: "100vh",
// 	width: "100vw",
// 	position: "relative"
// });

export class Slides extends Component {
	constructor(props) {
		super();
		this.slide = 1;
	}

	advance(bool) {
		console.log(this.slide);

	}

	render() {
		return(
			<div className={ slides }>
				<div className={ slides__carrier }>
					<Slide>
						<h1 className={ alpha }>Am I a Real<br/>Developer?</h1>
						<div>
							<Button
								onClick={ () => this.advance(true) }
							>
								Take the Quiz
							</Button>
						</div>
					</Slide>

					<Slide
						advance={ () => this.advance(true) }
						title={"first quesiont"}
						question={"lorem borem florem torum"}
					>
					</Slide>
				</div>
			</div>
		);
	}
}