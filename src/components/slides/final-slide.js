import React from 'react';
import { css, merge } from 'glamor';
import { Button } from '../button/button';
import { 
	alphaSmall, 
	copy, 
	borderTraceAnim 
} from '../../style/components/type';
import { TimelineLite, Elastic, Power0 } from 'gsap';
import { uniqueId as loUniqueId } from 'lodash';
import { yellowBg, purpleBg } from '../../style/color';

const PLAY_ANIMATION = true;

export class FinalSlide extends React.Component {
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
			TL.staggerFrom('#conclusion-headline span', 0.5, {
					delay: 0.5, 
					y: "-40%", 
					opacity: 0, 
					ease: Elastic.easeOut.config(1, 0.5)
				}, 0.05)
				.from('.alpha__borders > span:nth-child(1)', 0.4, {
					x: "-100%",
					ease: Power0.easeNone
				}, '-=0.5')
				.from('.alpha__borders > span:nth-child(2)', 0.3, {
					y: "-100%",
					ease: Power0.easeNone
				})
				.from('.alpha__borders > span:nth-child(3)', 0.4, {
					x: "100%",
					ease: Power0.easeNone
				})
				.from('.alpha__borders > span:nth-child(4)', 0.3, {
					y: "100%",
					ease: Power0.easeNone
				})
				.staggerFrom(`#body-${this.bodyUniqueId} > div`, 0.8, {
					y: "-30%", 
					opacity: 0, 
					ease: Elastic.easeOut.config(1, 0.9)
				}, 0.2, "-=0.5")

				TL.pause();
			TL.play();
		}
	}

	render() {
		return (
			<div>
				<h1 {...alphaSmall}>
					{
						this.props.isSuccessful ? 
						<span id="conclusion-headline">
								{spanSplit('Congrats!')}
						</span>
						: 
						<span id="conclusion-headline">
							{spanSplit('Oh no!')}
						</span>
					}
				</h1>
				<div id={`body-${this.bodyUniqueId}`}>
					<div className={'row align-center'}>
						<div className="column small-10 medium-8 large-6 u-text-left">
							<p className={ copy }>
								{this.props.copy}
							</p>
						</div>
					</div>
					<div>
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
		char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
	));
}
