import React from 'react';
import { css } from 'glamor';
import { Button } from '../button/button';
import { 
	alphaSmall, 
	gamma, 
	copy, 
} from '../../style/components/type';
import { TimelineLite, Elastic } from 'gsap';

const slide__content = css({
	height: 'calc(100vh - 14em)',
	overflow: 'auto',
	WebkitOverflowScrolling: 'touch',
	marginTop: '5rem',
	'@media screen and (min-width: 640px)': {
		height: 'calc(100vh - 8em)',
		marginTop: 0,
		paddingTop: '12vmin',
		paddingBottom: '1em',
	}
});

const flexVerticalCenter = css({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
})

export class FinalSlide extends React.Component {
	constructor() {
		super();
		this.state = {
			animateBorder: false
		}
	}
	shouldComponentUpdate(nextProps) {
		if (this.props.isSuccessful !== nextProps.isSuccessful || this.props.isReady !== nextProps.isReady) {
			return true;
		}
		return false;
	}
	componentWillMount() {
		// dunno why can't pass element as ref to anim, need get hacky w/ ids
		this.TL = new TimelineLite();
	}
	componentDidMount() {
		this.makeFun();
	}
	componentDidUpdate() {
		this.makeFun();
	}
	makeFun() {
		if (this.props.isReady) {
			if (window.ga) {
				const page = this.props.isSuccessful ? '/yep' : '/nope';
				window.ga('send', 'pageview', page);
				console.log(page);
			}
			this.TL = new TimelineLite();
			this.TL.staggerFrom('#conclusion-headline span', 2, {
				delay: 1,
				y: "-40%",
				opacity: 0,
				ease: Elastic.easeOut.config(1, 0.2)
			}, 0.05)
				.staggerFrom(`#final-slide-body > div > div`, 0.8, {
					y: "-20%",
					opacity: 0,
					ease: Elastic.easeOut.config(1, 0.9)
				}, 0.1, "-=1.5")
			this.TL.pause();
			this.TL.play();

			setTimeout(() => {
				if (this.props.isSuccessful) {
					this.props.onSuccess();
				}
			}, 2000);
		}
	}

	render() {
		const buttonContainer = css({
			display: 'flex',
			justifyContent: this.props.isSuccessful ? 'center' : 'space-between',
			flexDirection: 'column',
			"@media screen and (min-width: 640px)": {
				flexDirection: 'row',
			},
		});
		
		return (
			<div 
				className={`row align-center ${slide__content}`}
				id="final-slide"
			>
				<div className={`column small-12 ${flexVerticalCenter}`}>
					<h1 {...alphaSmall}>
						{
							this.props.isSuccessful ? 
							<span id="conclusion-headline">
									{/* {spanSplit('Congrats!')} */}
									{spanSplit('Yeaa Boooyyyyy!')}
							</span>
							: 
							<span id="conclusion-headline">
								{spanSplit('No worries!')}
							</span>
						}
					</h1>
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

function makeTweetIntent(text) {
	return `https://twitter.com/intent/tweet?text=${text}`;
}
