import React from 'react';
import { merge } from 'glamor';
import { alpha, alphaSmall, borderTraceAnim } from '../../style/components/type';
import { TimelineLite, Elastic } from 'gsap';

export class Headline extends React.Component {
	componentDidMount() {
		console.log(this.props.animationSidecar);
		if (this.props.animateLetters) {
			const TL = new TimelineLite();
			TL.staggerFrom('#intro-headline span', 0.5, {
				delay: 0.5, 
				y: "-40%", 
				opacity: 0, 
				ease: Elastic.easeOut.config(1, 0.5),
				onComplete: () => {
					setTimeout(() => {
						this.setState({animateBorder: true})
					}, 200);
					// setTimeout(() => {
					// 	this.props.onAnimationComplete();
					// }, 500);
				}
			}, 0.05)
			// .staggerFrom('#start-button > div', 0.5, {
			// 	y: "-30%", 
			// 	opacity: 0, 
			// 	ease: Elastic.easeOut.config(1, 0.5)
			// }, 0.15, "+=0.5")
			TL.play();
		}
	}

	generateContent() {
		return this.props.secondaryContent ? (
			<span>
				{spanSplit(this.props.primaryContent)}
				<br/>
				{spanSplit(this.props.secondaryContent)}
			</span>
		) : (
			<span>
				{spanSplit(this.props.primaryContent)}
			</span>
		);
	}
	

	render() {
		const typeClass = this.props.secondaryContent ? alpha : alphaSmall;
		const traceAnim = this.props.animateBorder ? borderTraceAnim : null;
		return (
			<h1 {...merge(typeClass, traceAnim)} id="intro-headline">
				{this.generateContent()}
			</h1>
		);
	}
}

function spanSplit(string) {
	return string.split('').map((char, index) => (
		char === ' ' ? <span ref="letter" key={index}>&nbsp;</span> : <span key={index}>{char}</span>
	));
}
