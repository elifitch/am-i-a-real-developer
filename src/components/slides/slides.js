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
const SLIDE_COUNT = 2;

const slides = css({
	height: "100vh",
	width: "100vw",
	overflow: "hidden"
});

// let slides__carrier = css({
// 	transition: "all 1s",
// 	transform: `translateY(0%)`
// });

// const translation = (SLIDE_COUNT / this.slide) * 100;
// const translation = 100 / (SLIDE_COUNT / this.slide);

// const slides__slide = css({
// 	height: "100vh",
// 	width: "100vw",
// 	position: "relative"
// });
let slides__carrier = css({
	transition: "all 1s",
	transform: `translateY(0%)`
});

export class Slides extends Component {
	constructor(props) {
		super(props);
		// this.slide = 0;
		this.state = {
			slide: 0
		}
	}
	shouldComponentUpdate() {
		console.log('should');
		return true;
	}

	advance(bool) {
		const nextSlide = this.state.slide + 1;

		const translation = -(100 / (SLIDE_COUNT / nextSlide));
		slides__carrier = css({
			transition: "all 1s",
			transform: `translateY(${translation}%)`
		});

		const newState = {
			slide: nextSlide
		};
		this.setState(newState);
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