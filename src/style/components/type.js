import { css, after, before, merge } from 'glamor';
import { threeDText, bgBorder } from '../mixins';
import { yellow, purple } from '../color';
import { brandon } from '../typefaces';

// const alphaBorder = bgBorder(purple, '0.1em');

const borderTrace = css.keyframes('border-trace', {
  //depends on 740x320 ratio
  '0%': {
  	backgroundSize: '0% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
  },
  '28.5%': {
  	backgroundSize: '100% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
  },
  '50%': {
  	backgroundSize: '100% 0.1em, 0.1em 100%, 0% 0.1em, 0.1em 0%'
  },
  '78.5%': {
  	backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 0%'
  },
  '100%': {
  	backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 100%'
  }
});

export const borderTraceAnim = css(
	after({
		animationName: `${borderTrace}`,
		// animationDuration: '1.4s',
		animationDuration: '1.2s',
		// animationTimingFunction: 'ease-in-out',
		animationTimingFunction: 'linear',
		animationFillMode: 'forwards',
	}),
	before({
		animationName: `${borderTrace}`,
		// animationDuration: '1.4s',
		animationDuration: '1.2s',
		// animationTimingFunction: 'ease-in-out',
		animationTimingFunction: 'linear',
		animationFillMode: 'forwards',
	})
);

// export const alpha = css(
// 	brandon,
// 	{
// 		label: "alpha",
// 		display: 'inline-block',
// 		fontSize: '2em',
// 		textTransform: 'uppercase',
// 		letterSpacing: '0.05em',
// 		textAlign: 'center',
// 		color: purple,
// 		position: 'relative',
// 		padding: '0.5em',
// 		textShadow: threeDText(yellow, 3),
// 		whiteSpace: 'nowrap',
// 		marginBottom: "calc(1.5rem + 0.1em + 0.1em)",
// 		"@media screen and (min-width: 640px)": {
// 			fontSize: '5em',
// 			textShadow: threeDText(yellow, 10)
// 		},
// 		" span": {
// 			display: "inline-block",
// 			// transform: "translateY(50%)"
// 		}
// 	},
// 	after(
// 		merge(
// 			// borderTraceAnim,
// 			bgBorder(purple, '0.1em', false),
// 			{
// 				content: '""',
// 				top: 'calc(50% - 0.1em)',
// 				left: 'calc(50% - 0.1em)',
// 				height: 'calc(100% + 0.2em)',
// 				width: 'calc(100% + 0.2em)',
// 				display: 'block',
// 				position: 'absolute',
// 				transform: 'translate(-50%, -50%)',
// 				borderRadius: '0.04em',
// 				// backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 100%'
// 				backgroundSize: '0% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
// 			}
// 		)
// 	),
// 	before(
// 		merge(
// 			// borderTraceAnim,
// 			bgBorder(yellow, '0.1em', false), 
// 			{
// 				content: '""',
// 				top: 'calc(50% + 0.1em)',
// 				left: 'calc(50% + 0.1em)',
// 				height: 'calc(100% + 0.2em)',
// 				width: 'calc(100% + 0.2em)',
// 				display: 'block',
// 				position: 'absolute',
// 				transform: 'translate(-50%, -50%) rotate(180deg)',
// 				borderRadius: '0.04em',
// 				// backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 100%'
// 				backgroundSize: '0% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
// 			}
// 		)
// 	)
// );
export const alpha = css(
	brandon,
	{
		label: "alpha",
		display: 'inline-block',
		fontSize: '2em',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		textAlign: 'center',
		color: purple,
		position: 'relative',
		padding: '0.5em',
		textShadow: threeDText(yellow, 3),
		whiteSpace: 'nowrap',
		marginBottom: "calc(1.5rem + 0.1em + 0.1em)",
		"@media screen and (min-width: 640px)": {
			fontSize: '5em',
			textShadow: threeDText(yellow, 10)
		},
		" span": {
			display: "inline-block",
			// transform: "translateY(50%)"
		}
	}
);

export const alpha__borders = css({
	top: 'calc(50% - 0.1em)',
	left: 'calc(50% - 0.1em)',
	height: 'calc(100% + 0.4em)',
	width: 'calc(100% + 0.4em)',
	display: 'block',
	position: 'absolute',
	transform: 'translate(-50%, -50%)',
	overflow: 'hidden',
	"&:last-child": {
		transform: 'translate(-50%, -50%) rotate(180deg)',
		top: 'calc(50% + 0.1em)',
		left: 'calc(50% + 0.1em)',
		zIndex: -1,
	}

});

export const alpha__borderTB = css({
	position: 'absolute',
	height: '0.1em',
	width: '100%',
});
export const alpha__borderRL = css({
	position: 'absolute',
	height: '100%',
	width: '0.1em',
});

export const alpha__borderTop = css({
	top: 0,
	left: 0,
	borderTopLeftRadius: '0.04em',
	borderTopRightRadius: '0.04em',
});
export const alpha__borderRight = css({
	top: 0,
	right: 0,
	borderTopRightRadius: '0.04em',
	borderBottomRightRadius: '0.04em',
});
export const alpha__borderBottom = css({
	bottom: 0,
	left: 0,
	borderBottomLeftRadius: '0.04em',
	borderBottomRightRadius: '0.04em',
});
export const alpha__borderLeft = css({
	top: 0,
	left: 0,
	borderTopLeftRadius: '0.04em',
	borderBottomLeftRadius: '0.04em',
});

// export const alpha_$_In = css.keyframes('border-trace', { // optional name
//   '0%': {
//   	backgroundSize: '0% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
//   },
//   '25%': {
//   	backgroundSize: '100% 0.1em, 0.1em 0%, 0% 0.1em, 0.1em 0%'
//   },
//   '50%': {
//   	backgroundSize: '100% 0.1em, 0.1em 100%, 0% 0.1em, 0.1em 0%'
//   },
//   '75%': {
//   	backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 0%'
//   },
//   '1000%': {
//   	backgroundSize: '100% 0.1em, 0.1em 100%, 100% 0.1em, 0.1em 100%;'
//   }
// })

export const alphaSmall = css(
	alpha,
	{
		fontSize: '3em',
		// marginBottom: '0.5em'
		marginBottom: 0
	}
)

export const beta = css(
	brandon,
	{
		fontSize: '3em',
		marginBottom: '0.5em'
	}
)

export const gamma = css(
	brandon,
	{
		fontSize: '2em',
		marginBottom: '0.7em'
	}
)

export const delta = css(
	brandon,
	{
		fontSize: '1.6em',
	}
)

export const epsilon = css(
	brandon,
	{
		fontSize: '1em',
	}
)

export const zeta = css(
	brandon,
	{
		fontSize: '0.6em',
	}
)

export const copy = css({
	fontFamily: 'Pinopolis-Regular',
	lineHeight: 1.4,
	marginBottom: "1.5rem"
})
