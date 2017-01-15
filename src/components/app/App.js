import React, { Component } from 'react';
import { css } from 'glamor';
import { alpha, copy } from '../../style/components/type';
import { Footer } from '../footer/footer';
import { Button } from '../button/button';

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
	// marginBottom: "1em"
	display: "inline-flex",
	flexDirection: "column",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
});

// const 

class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="column small-12 u-text-center">
						<div className={ intro }>
							<div className={ `${alpha}` }>Am I a Real<br/>Developer?</div>
							<div>
								<Button
									content="Take the Quiz"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row align-center">
					<div className="column large-8 u-text-center">
						{/*<p className={ copy }>A very serious quiz to determine how real of a developer you really are.</p>*/}
						{/*<Button
							content="foo"
						/>*/}
					</div>
				</div>
				<Footer/>
				<div className={ vignette }></div>
			</div>
		);
	}
}

export default App;
