import React, { Component } from 'react';

import { css } from 'glamor';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Slides } from '../slides/slides';
import { Confetti } from '../confetti/confetti';

const vignette = css({
	position: "fixed",
	width: "100vw",
	height: "100vh",
	top: 0,
	left: 0,
	background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%)",
	pointerEvents: "none"
});

const noClick = css({
	pointerEvents: 'none'
})

class App extends Component {
	constructor() {
		super();
		this.state = {
			headerVisible: false,
			fireConfetti: false
		}
		this.makeHeaderVisible = this.makeHeaderVisible.bind(this);
		this.startConfetti = this.startConfetti.bind(this);
		this.stopConfetti = this.stopConfetti.bind(this);
	}
	makeHeaderVisible() {
		this.setState({
			headerVisible: true
		})
	}
	startConfetti() {
		this.setState({
			fireConfetti: true
		})
	}
	stopConfetti() {
		this.setState({
			fireConfetti: false
		})
	}

	render() {
		return (
			<div {...noClick}>
				<Header
					visible={ this.state.headerVisible }
				/>

				<Slides
					slideIndex={ 0 }
					makeHeaderVisible={ this.makeHeaderVisible }
					onSuccess={this.startConfetti}
				/>

				<Confetti 
					shoot={this.state.fireConfetti}
				/>

				<Footer/>
				<div className={ vignette }></div>
			</div>
		);
	}
}

export default App;
