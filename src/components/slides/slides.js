import React, { Component } from 'react';
import { css, merge } from 'glamor';
import { alpha, copy } from '../../style/components/type';
import { Button } from '../button/button';
import { Slide } from './slide';

const slides = css({
	height: "100vh",
	width: "100vw",
	overflow: "hidden"
});

let slides__carrier = css({
	transition: "all 1s",
	label: "slides__carrier"
});

let slides__translation = css({
	transform: `translateY(0%)`
})

const questionList = [
	{
		title: "# 1",
		question: "Do you write code?"
	},
	{
		title: "# 2",
		question: "Do you make software?"
	},
	{
		title: "# 3",
		question: "Do you create websites?"
	},
	{
		title: "# 4",
		question: "Are you a person or company that builds and sells houses or other buildings on a piece of land?"
	}
];

export class Slides extends Component {
	constructor(props) {
		super(props);
		// this.slide = 0;
		this.state = {
			slide: 0,
			yeps: 0,
			nopes: 0
		};
		this.advance = this.advance.bind(this);
		this.generateQuestions = this.generateQuestions.bind(this);
	}
	shouldComponentUpdate() {
		return true;
	}

	advance(yep) {
		if (this.state.slide < (questionList.length)) {
			let newYeps;
			let newNopes;
			if (yep) {
				newYeps = this.state.yeps + 1;
			} else {
				newNopes = this.state.nopes + 1;
			}

			const nextSlide = this.state.slide + 1;
			const translation = -(100 / ((questionList.length+1) / nextSlide));
			console.log(translation);
			slides__translation = css({
				transform: `translateY(${translation}%)`
			});

			const newState = {
				slide: nextSlide,
				yeps: newYeps,
				nopes: newNopes
			};
			this.setState(newState);
		}
	}

	generateQuestions() {
		const self = this;
		let questionSlides = [];
		questionList.forEach(function(question, index) {
			questionSlides.push(
				<Slide
					advance={ self.advance }
					title={question.title}
					question={question.question}
				>
				</Slide>
			)
		});

		return questionSlides;
	}

	render() {
		return(
			<div className={ slides }>
				<div { ...merge(slides__carrier, slides__translation) }>
				<Slide>
					<h1 className={ alpha }>Am I a Real<br/>Developer?</h1>
					<div className="row align-center">
						<div className="column large-6 u-text-left">
							<p className={ copy }>
								Sick of folks saying that you're not engineery enough?<br/>That you're not a "real" developer? Take the quiz and find out.
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
				{ this.generateQuestions() }

					
				</div>
			</div>
		);
	}
}