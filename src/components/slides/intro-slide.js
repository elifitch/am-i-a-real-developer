import React from 'react';
import { css, merge } from 'glamor';
import { Button } from '../button/button';
import { alpha, copy, borderTraceAnim, titleAnim } from '../../style/components/type';
import { TweenMax, Elastic } from 'gsap';

const headline = css({
	// transform: `translateY(0%)`
});

export class IntroSlide extends React.Component {
	constructor() {
		super();
		this.state = {
			animateBorder: false
		}
	}

	componentDidMount() {
		if (this.props.animateTitle) {
			// run gsap anim
			TweenMax.staggerFrom('#intro-headline span', 0.5, {
				delay: 0.5, 
				y: -40, 
				opacity: 0, 
				ease: Elastic.easeOut.config(1, 0.5),
				onComplete: () => {
					setTimeout(() => {
						this.setState({animateBorder: true})
					}, 200)
				}
			}, 0.05);
		}
	}

	render() {
		console.log( this.state.animateBorder);
		// const traceAnim = this.props.animateBorder ? borderTraceAnim : null;
		const traceAnim = this.state.animateBorder ? borderTraceAnim : null;
		const titleAnim = this.props.animateTitle ? titleAnim : null;
		return (
			<div>
				<h1 {...merge(alpha, headline, traceAnim)} id="intro-headline">
					{spanSplit('Am I a Real')}
					<br/>
					{spanSplit('Developer?')}
				</h1>
				<div className="row align-center">
					<div className="column small-10 medium-8 large-6 u-text-left">
						<p className={ copy }>
							Sick of folks saying that you're not engineery enough? That you're not a "real" developer? Take the quiz and find out.
						</p>
					</div>
				</div>
				<div>
					<Button
						onClick={ () => this.props.advance(true) }
					>
						Take the Quiz
					</Button>
				</div>
			</div>
		)
	}
}

function spanSplit(string) {
	return string.split('').map((char, index) => (
		char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
	));
}
