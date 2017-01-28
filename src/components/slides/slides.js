import React, { Component } from 'react';
import { css, merge as mergeStyles } from 'glamor';
import { alpha, gamma, copy } from '../../style/components/type';
import { Button } from '../button/button';
import { Slide } from './slide';
import { showHeader } from '../header/header';
import { IntroSlide } from './intro-slide';

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

const headline = css({
	// transform: `translateY(0%)`
});

const questionList = [
	{
		question: "Do you write code?"
	},
	{
		question: "Do you create websites?"
	},
	{
		question: "Are you a chemical that is used to develop photographs?"
	},
	{
		question: "Are you a person or company that builds and sells houses or other buildings on a piece of land?"
	},
	{
		question: "Are you a person who lays out, at full size, the lines of a ship or vessel and prepares templates from them?"
	},
	{
		question: "Do you make software?"
	},
];

export class Slides extends Component {
	constructor(props) {
		super(props);
		// this.slide = 0;
		this.state = {
			slide: 0,
			yeps: 0,
			nopes: 0,
			animateBorder: false
		};
		this.advance = this.advance.bind(this);
		this.generateQuestions = this.generateQuestions.bind(this);
	}

	shouldComponentUpdate() {
		return true;
	}

	advance(yep) {
		// showHeader();
		this.props.makeHeaderVisible();
		if (this.state.slide < questionList.length) {
			let newYeps;
			let newNopes;
			if (yep) {
				newYeps = this.state.yeps + 1;
			} else {
				newNopes = this.state.nopes + 1;
			}

			const nextSlide = this.state.slide + 1;
			const translation = -(100 / ((questionList.length+2) / nextSlide));
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
		if (this.state.slide === questionList.length) {
			console.log('final');
			showHeader();
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
		let foo = false;
		setTimeout(() => {
			this.setState({
				animateBorder: true
			});
		},2000);

		return(
			<div { ...slides }>
				<div { ...mergeStyles(slides__carrier, slides__translation) }>
				<Slide
					key={0}
				>
					<IntroSlide
						advance={this.advance}
						animateBorder={this.state.animateBorder}
					/>
					{/*<h1 className={ `${alpha} ${headline}` }>Am I a Real<br/>Developer?</h1>
					<div className="row align-center">
						<div className="column small-10 medium-8 large-6 u-text-left">
							<p className={ copy }>
								Sick of folks saying that you're not engineery enough? That you're not a "real" developer? Take the quiz and find out.
							</p>
						</div>
					</div>
					<div>
						<Button
							onClick={ () => this.advance(true) }
						>
							Take the Quiz
						</Button>
					</div>*/}
				</Slide>
				{ this.generateQuestions() }
				<Slide
					key={"final"}
				>
					<h1 className={ `${alpha} ${headline}` }>Congratulations!</h1>
					<div className="row align-center">
						<div className="column small-10 medium-8 large-6 u-text-left">
							<p className={ gamma }>
								Looks like you *are* a real developer!
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
					
				</div>
			</div>
		);
	}
}