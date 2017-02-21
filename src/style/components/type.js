import { css, after, before } from 'glamor';
import { threeDText } from '../mixins';
import { secondary, primary } from '../color';
import { brandon } from '../typefaces';

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

export const alpha = css(
	brandon,
	{
		label: "alpha",
		display: 'inline-block',
		fontSize: '2em',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		textAlign: 'center',
		color: primary,
		position: 'relative',
		padding: '0.5em',
		textShadow: threeDText(secondary, 3),
		whiteSpace: 'nowrap',
		marginBottom: "calc(1.5rem + 0.1em + 0.1em)",
		userSelect: 'none',
		"@media screen and (min-width: 670px)": {
			fontSize: '4em',
			textShadow: threeDText(secondary, 10)
		},
		"@media screen and (min-width: 769px)": {
			fontSize: '5em',
			textShadow: threeDText(secondary, 10)
		},
		" span": {
			display: "inline-block",
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

export const alphaSmall = css(
	brandon,
	{
		label: "alpha",
		display: 'inline-block',
		fontSize: '2.5em',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		textAlign: 'center',
		color: primary,
		position: 'relative',
		// paddingTop: '0.5em',
		// paddingBottom: '0.5em',
		textShadow: threeDText(secondary, 5),
		whiteSpace: 'nowrap',
		marginBottom: "calc(1.5rem + 0.1em + 0.1em)",
		"@media screen and (min-width: 640px)": {
			fontSize: '3.5em',
			textShadow: threeDText(secondary, 10)
		},
		"@media screen and (min-width: 768px)": {
			fontSize: '5em',
			textShadow: threeDText(secondary, 10)
		},
		" span": {
			display: "inline-block",
		}
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
		fontSize: '1.6em',
		marginBottom: '0.7em',
		"@media screen and (min-width: 640px)": {
			fontSize: '2em',
		}
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
	fontFamily: ['pinopolis', 'monaco', 'monospace'],
	lineHeight: 1.4,
	marginBottom: "1.5rem"
})
