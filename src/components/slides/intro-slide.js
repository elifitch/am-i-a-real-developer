import React from 'react';
import { css, merge } from 'glamor';
import { Button } from '../button/button';
import { alpha, copy } from '../../style/components/type';

const headline = css({
	// transform: `translateY(0%)`
});

export function IntroSlide({advance}) {
	return(
		<div>
			<h1 {...merge(alpha, headline)} >Am I a Real<br/>Developer?</h1>
			<div className="row align-center">
				<div className="column small-10 medium-8 large-6 u-text-left">
					<p className={ copy }>
						Sick of folks saying that you're not engineery enough? That you're not a "real" developer? Take the quiz and find out.
					</p>
				</div>
			</div>
			<div>
				<Button
					onClick={ () => advance(true) }
				>
					Take the Quiz
				</Button>
			</div>
		</div>
	)
}