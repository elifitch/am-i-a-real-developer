import React from 'react';
import { css } from 'glamor';
import { beta, copy } from '../../style/components/type';
import { Button } from '../button/button';

const slides__slide = css({
	height: "100vh",
	width: "100vw",
	position: "relative"
});

const center = css({
	display: "inline-flex",
	flexDirection: "column",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
});


export function Slide({
	title,
	question,
	children,
	advance
}) {
	return(
		

		<div className={ slides__slide }>
			<div className="row">
				<div className="column small-12 u-text-center">
					<div className={ center }>
						<h2 className={ beta }>{ title }</h2>
						<p className={ copy }>{ question }</p>
						<Button>gerpo0</Button>
						{ children }
					</div>
				</div>
			</div>
		</div>
	)

}