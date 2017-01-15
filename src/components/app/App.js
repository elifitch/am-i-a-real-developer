import React, { Component } from 'react';
import { css } from 'glamor';
import { purple, yellow, lightGray } from '../../style/color';
import { alpha, copy } from '../../style/components/type';

const page = css({
	backgroundColor: lightGray,
	height: "100vh",
	width: "100vw"
});

const vignette = css({
	position: "fixed",
	width: "100vw",
	height: "100vh",
	top: 0,
	left: 0,
	background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%)",
	pointerEvents: "none"
});

const intro = css({
	marginBottom: "1em"
	// display: "inline-flex",
	// position: "absolute",
	// top: "50%",
	// left: "50%",
	// transform: "translate(-50%, -50%)"
});

// const 

class App extends Component {
	render() {
		return (
			<div className={ page }>
				<div className="row">
					<div className="column small-12 u-text-center">
						<div className={ `${alpha} ${intro}` }>Am I a Real<br/>Developer?</div>
					</div>
				</div>

				{/*<div className={ button }>Take the Quiz</div>*/}
				<p className={ copy }>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam neque modi corrupti maxime quae odio expedita quasi! A adipisci, labore. Commodi repudiandae saepe laborum, accusamus assumenda possimus exercitationem. A, voluptatum.
				</p>

				<div className={ vignette }></div>
			</div>
		);
	}
}

export default App;
