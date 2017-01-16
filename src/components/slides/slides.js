import React, { Component } from 'react';
import { css } from 'glamor';
import { alpha, copy } from '../../style/components/type';
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
const SLIDE_COUNT = 3;

const slides = css({
	height: "100vh",
	width: "100vw",
	overflow: "hidden"
});

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
						<div className="row align-center">
							<div className="column large-6 u-text-left">
								<p className={ copy }>
									Sick of folks insinuating that you're not engineery enough?<br/>That you're not a "real" developer? Take the quiz and find out.
								</p>
							</div>
						</div>
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