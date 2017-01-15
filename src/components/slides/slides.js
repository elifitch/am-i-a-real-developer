import React, { Component } from 'react';
import { css } from 'glamor';
import { alpha, copy } from '../../style/components/type';
import { Footer } from '../footer/footer';
import { Button } from '../button/button';
import { Slide } from './slide';

const intro = css({
	display: "inline-flex",
	flexDirection: "column",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
});

const slides = css({
	height: "100vh",
	width: "100vw",
	overflow: "hidden"
});

const slides__carrier = css({
	transition: "all 1s"
});

const slides__slide = css({
	height: "100vh",
	width: "100vw",
	position: "relative"
});

function advance() {
	
}

export class Slides extends Component {
	constructor(props) {
		super();
		this.slide = 1;
	}

	advance() {

	}

	render() {
		return(
			<div className={ slides }>
				<div className="slide__carrier">
					<Slide
						advance={ () => console.log('advance') }
						title={"first quesiont"}
						question={"lorem borem florem torum"}
					>
						foop
					</Slide>

					<div className={ slides__slide }>
						<div className="row">
							<div className="column small-12 u-text-center">
								<div className={ intro }>
									<p className={ copy }>
										asdfas;dlkfj asdfa asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf
									</p>
									<div>
										<Button
											content="Take the Quiz"
											onClick={ this.advance }
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}