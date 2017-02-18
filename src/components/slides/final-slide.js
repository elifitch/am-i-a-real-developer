import React from 'react';
import { css, merge } from 'glamor';
import { Button } from '../button/button';
import { 
	alphaSmall, 
	gamma, 
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
		this.TL = new TimelineLite();
	}
	componentDidUpdate() {
		console.log(this.bodyUniqueId);
		if (this.props.isReady) {
			console.log('play');
			this.TL = new TimelineLite();
			this.TL.staggerFrom('#conclusion-headline span', 2, {
				delay: 1, 
				y: "-40%", 
				opacity: 0, 
				ease: Elastic.easeOut.config(1, 0.2),
				onComplete: () => {
					console.log('congrats anim');
				}
			}, 0.05)
			.staggerFrom(`#body-${this.bodyUniqueId} > div`, 0.8, {
				y: "-20%", 
				opacity: 0, 
				ease: Elastic.easeOut.config(1, 0.9)
			}, 0.15, "-=1.5")
			this.TL.pause();
			this.TL.play();
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
							{spanSplit('No worries!')}
						</span>
					}
				</h1>
				<div id={`body-${this.bodyUniqueId}`}>
					<div className={'row align-center'}>
						<div className="column small-10 u-text-center">
							<p className={ gamma }>
								{
									this.props.isSuccessful ? 
									'Looks like you ARE a real developer!' :
									"Shock, horror! It is ok to not be a developer."
								}
							</p>
						</div>
					</div>
					<div className={'row align-center'}>
						<div className="column small-10 medium-8 large-7 xlarge-6 u-text-left">
							<p className={ copy }>
								{
									this.props.isSuccessful ? 
									`Don't ever let anybody tell you that you're anything less than you are. No developer gets to be "more" developer than anybody else. Nobody gets to be the arbiter of "realness".`  :
									`Even if you're not a developer, don't let people take you down a peg by defining for you what you know yourself to be. If you're not a developer that's cool.`
								}
							</p>
							{
								!this.props.isSuccessful ? 
								<p className={ copy }>
									If you would like to be, hit the button down thattaways 👇🏾 and check out some awesome free resources at Codecademy.com.
								</p> : 
								<p className={ copy }>
									Are you a real developer? 💩 yeah.
								</p>
							}
						</div>
					</div>
					<div className={'row align-center'}>
						<div className="column small-12 medium-10 large-8 u-align-justify"
							style={{maxWidth: '38rem'}}
						>
							<Button
								href={"http://eli.wtf"}
							>
								Share on the twitters ✌️🏾
							</Button>
							<Button
								href={"http://eli.wtf"}
							>
								Check out Codecademy 🚀
							</Button>
						</div>
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
