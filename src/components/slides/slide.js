import React from 'react';
import { css } from 'glamor';
import { beta, copy } from '../../style/components/type';
import { Button } from '../button/button';
// import { yellow } from '../../style/color';

const slides__slide = css({
	height: "100vh",
	width: "100vw",
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center"
});


export function Slide({
	title,
	question,
	children,
	advance
}) {
	const content = children 
		? 
		children
		: 
		<div>
			<h2 className={ beta }>{ title }</h2>
			<p className={ copy }>{ question }</p>
			<Button
				onClick={ () => advance(true) }
			>
				Yes
			</Button>
			<Button
				onClick={ () => advance(false) }
			>
				No
			</Button>
		</div>


	return(
		<div className={ slides__slide }>
			<div className="u-full-width">
				<div className="row">
					<div className="column small-12 u-text-center">
						{ content }
					</div>
				</div>
			</div>
		</div>
	)

}