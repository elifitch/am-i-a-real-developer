import React from 'react';
import { css } from 'glamor';
import { beta, copy } from '../../style/components/type';
import { Button } from '../button/button';
// import { yellow } from '../../style/color';

const slides__slide = css({
	label: "slides__slide",
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
		<div className="row align-center">
			<div className="column small-12 large-6">
				<h2 className={ beta }>{ title }</h2>
				<p className={ `${copy} u-text-left u-inline-block` }>{ question }</p>
				<div>
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
			</div>
		</div>


	return(
		<div { ...slides__slide }>
			<div className="u-full-width">
				<div className="row align-center">
					<div className="column small-12 u-text-center">
						{ content }
					</div>
				</div>
			</div>
		</div>
	)

}