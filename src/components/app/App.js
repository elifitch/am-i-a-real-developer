import React, { Component } from 'react';

import { css } from 'glamor';
import { GlobalStyles } from '../../style/global-style';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Slides } from '../slides/slides';

const vignette = css({
	position: "fixed",
	width: "100vw",
	height: "100vh",
	top: 0,
	left: 0,
	background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%)",
	pointerEvents: "none"
});

let showHeader = false;


class App extends Component {
	// advance() {
	// 	console.log('asdf');
	// }
	makeHeaderVisible() {
		console.log('makeHeaderVisible');
		showHeader = true;
	}

	render() {
		return (
			<div>
				<Header
					show={showHeader}
				/>

				<Slides
					slideIndex={ 0 }
					makeHeaderVisible={ this.makeHeaderVisible }
				/>

				<Footer/>
				<div className={ vignette }></div>
			</div>
		);
	}
}

export default App;
