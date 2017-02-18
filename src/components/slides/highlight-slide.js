import React from 'react';
import { css, merge } from 'glamor';
import { Button } from '../button/button';
import { alpha, alphaSmall, copy, borderTraceAnim } from '../../style/components/type';
import { TimelineLite, Elastic } from 'gsap';
import { uniqueId as loUniqueId } from 'lodash';

const PLAY_ANIMATION = true;

const fadeIn = css({
	transition: "opacity 0.15s"
	// opacity: 1
});

export class HighlightSlide extends React.Component {
	constructor() {
		super();
		this.state = {
			animateBorder: false
		}
	}
	componentWillMount() {
		// dunno why can't pass element as ref to anim, need get hacky w/ ids
		this.bodyUniqueId = loUniqueId();
	}
	componentDidMount() {
		// run gsap anim
		if (PLAY_ANIMATION) {
			const TL = new TimelineLite();
			TL.staggerFrom('#intro-headline span', 0.5, {
					delay: 0.5, 
					y: "-40%", 
					opacity: 0, 
					ease: Elastic.easeOut.config(1, 0.5),
					onComplete: () => {
						setTimeout(() => {
							this.setState({animateBorder: true})
						}, 200)
					}
				}, 0.05)
				.staggerFrom(`#body-${this.bodyUniqueId} > div`, 0.5, {
					y: "-30%", 
					opacity: 0, 
					ease: Elastic.easeOut.config(1, 0.5)
				}, 0.15, "+=0.5")


			TL.play();
		}
	}

	render() {
		const traceAnim = this.state.animateBorder ? borderTraceAnim : null;
		const typeClass = this.props.secondaryContent ? alpha : alphaSmall;

		return (
			<div>
				<h1 {...merge(typeClass, traceAnim)} id="intro-headline">
					{
						this.props.secondaryContent ? 
							<span>
								{spanSplit(this.props.primaryContent)}
								<br/>
								{spanSplit(this.props.secondaryContent)}
							</span>
						: <span>{spanSplit(this.props.primaryContent)}</span>
					}
				</h1>
				<div id={`body-${this.bodyUniqueId}`}>
					<div className={`row align-center ${fadeIn}`}>
						<div className="column small-10 medium-8 large-6 u-text-left">
							<p className={ copy }>
								{this.props.copy}
							</p>
						</div>
					</div>
					<div {...fadeIn}>
						{this.props.buttonText ? 
							<Button
								onClick={ () => this.props.advance(true) }
							>
								Take the Quiz!
							</Button> 
						: null}
					</div>
				</div>
			</div>
		)
	}
}

function spanSplit(string) {
	return string.split('').map((char, index) => (
		char === ' ' ? <span key={index} {...fadeIn}>&nbsp;</span> : <span key={index} {...fadeIn}>{char}</span>
	));
}
