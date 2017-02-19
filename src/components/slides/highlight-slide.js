import React from 'react';
import { merge } from 'glamor';
import { Button } from '../button/button';
import { 
	alpha, 
	alphaSmall, 
	alpha__borders, 
	alpha__borderTB, 
	alpha__borderRL, 
	alpha__borderTop,
	alpha__borderRight,
	alpha__borderBottom,
	alpha__borderLeft, 
	copy, 
	borderTraceAnim 
} from '../../style/components/type';
import { TimelineLite, Elastic, Power0 } from 'gsap';
import { uniqueId as loUniqueId } from 'lodash';
import { yellowBg, purpleBg } from '../../style/color';

const PLAY_ANIMATION = true;

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
							// this.setState({animateBorder: true})
						}, 200)
					}
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

				// TL.pause();
			TL.play();
		}
	}

	render() {
		const traceAnim = this.state.animateBorder ? borderTraceAnim : null;
		const typeClass = this.props.secondaryContent ? alpha : alphaSmall;

		return (
			<div>
				<h1 {...merge(typeClass, traceAnim)}>
					{
						this.props.secondaryContent ? 
							<span>
								<span id="intro-headline">
									{spanSplit(this.props.primaryContent)}
									<br/>
									{spanSplit(this.props.secondaryContent)}
								</span>
								<div className="alpha__borders" {...alpha__borders}>
										<span {...merge(purpleBg, alpha__borderTB, alpha__borderTop)}></span>
										<span {...merge(purpleBg, alpha__borderRL, alpha__borderRight)}></span>
										<span {...merge(purpleBg, alpha__borderTB, alpha__borderBottom)}></span>
										<span {...merge(purpleBg, alpha__borderRL, alpha__borderLeft)}></span>
								</div>
								<div className="alpha__borders" {...alpha__borders}>
										<span {...merge(yellowBg, alpha__borderTB, alpha__borderTop)}></span>
										<span {...merge(yellowBg, alpha__borderRL, alpha__borderRight)}></span>
										<span {...merge(yellowBg, alpha__borderTB, alpha__borderBottom)}></span>
										<span {...merge(yellowBg, alpha__borderRL, alpha__borderLeft)}></span>
								</div>
							</span>
						: <span>{spanSplit(this.props.primaryContent)}</span>
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
								onClick={ () => this.props.advance(false) }
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
