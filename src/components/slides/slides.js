import React, { Component } from 'react';
import { css, merge as mergeStyles } from 'glamor';
import { Slide } from './slide';
import { HighlightSlide } from './highlight-slide';
import { FinalSlide } from './final-slide';

const slides = css({
	label: "slides",
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
});

const questionList = [
	{
		question: "Do you write code?"
	},
	// {
	// 	question: "Do you create websites?"
	// },
	// {
	// 	question: "Are you a chemical that is used to develop photographs?"
	// },
	// {
	// 	question: "Are you a person or company that builds and sells houses or other buildings on a piece of land?"
	// },
	// {
	// 	question: "Are you a person who lays out, at full size, the lines of a ship or vessel and prepares templates from them?"
	// },
	// {
	// 	question: "Do you make software?"
	// },
];

export class Slides extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 0,
			yeps: 0,
			nopes: 0,
		};
		this.advance = this.advance.bind(this);
		this.generateQuestions = this.generateQuestions.bind(this);
	}

	shouldComponentUpdate() {
		return true;
	}

	advance(yep) {
		if (this.state.slide === 0) {
			this.props.makeHeaderVisible();
		}
		if (this.state.slide < questionList.length + 1) {
			const nextSlide = this.state.slide + 1;
			const translation = -(100 / ((questionList.length+2) / nextSlide));
			slides__translation = css({
				transform: `translateY(${translation}%)`
			});

			const newState = {
				slide: nextSlide,
				yeps: yep ? this.state.yeps + 1 : this.state.yeps,
				nopes: yep ? this.state.nopes : this.state.nopes + 1,
			};
			this.setState(newState);
		}
		if (this.state.slide === questionList.length - 1) {
			console.log('final');
		}
		if (this.state.slide === questionList.length) {
			console.log('congrats / failure');
		}
	}

	generateQuestions() {
		const self = this;
		let questionSlides = [];
		questionList.forEach(function(question, index) {
			questionSlides.push(
				<Slide
					advance={ self.advance }
					title={`# ${index + 1}`}
					question={question.question}
					key={index}
				>
				</Slide>
			)
		});

		return questionSlides;
	}

	render() {
		return(
			<div { ...slides }>
				<div { ...mergeStyles(slides__carrier, slides__translation) }>
				<Slide
					key={0}
				>
					<HighlightSlide
						advance={this.advance}
						primaryContent={'Am I a Real'}
						secondaryContent={'Developer?'}
						copy={`Sick of folks saying that you're not engineery enough? That you're not a "real" developer? Take the quiz and find out.`}
						buttonText={'Take the Quiz!'}
					/>
				</Slide>

				{ this.generateQuestions() }

				<Slide
					key={"final"}
				>	
					<FinalSlide
						isSuccessful={this.state.yeps > 0}
						isReady={this.state.slide === questionList.length + 1}
						onSuccess={this.props.onSuccess}
					/>
				</Slide>
					
				</div>
			</div>
		);
	}
}