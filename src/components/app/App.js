import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { css } from 'glamor';
import { purple, yellow, lightGray } from '../../style/color';
import { alpha } from '../../style/components/type';
import { threeDText } from '../../style/mixins';

const page = css({
	backgroundColor: lightGray,
	height: "100vh",
	width: "100vw",
	color: threeDText(purple, 10)
});

const vignette = css({
	position: "absolute",
	width: "100vw",
	height: "100vh",
	background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%)",
	pointerEvents: "none"
});

const intro = css({
	display: "inline-flex",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
})

// const 

class App extends Component {
	render() {
		return (
			<div className={ page }>
				<div className={ intro }>
					<div className={ `${alpha}` }>Am I a Real<br/>Developer</div>
				</div>
				<div className={ vignette }></div>
			</div>
		);
	}
}

export default App;
