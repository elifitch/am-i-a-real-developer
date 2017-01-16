import { css, after, before } from 'glamor';
import { threeDText } from '../mixins';
import { yellow, purple } from '../color';
import { brandon } from '../typefaces';

export const alpha = css(
	brandon,
	{
		display: 'inline-block',
		fontSize: '5em',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		textAlign: 'center',
		color: purple,
		position: 'relative',
		padding: '0.5em',
		textShadow: threeDText(yellow, 10),
		whiteSpace: 'nowrap',
		marginBottom: "1em"
	},
	after({
		top: 'calc(50% - 0.1em)',
		left: 'calc(50% - 0.1em)',
		border: `0.1em solid ${purple}`,
		content: '""',
		height: '100%',
		width: '100%',
		display: 'block',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		borderRadius: '0.04em'
	}),
	before({
		top: 'calc(50% + 0.1em)',
		left: 'calc(50% + 0.1em)',
		border: `0.1em solid ${yellow}`,
		content: '""',
		height: '100%',
		width: '100%',
		display: 'block',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		borderRadius: '0.04em'
	})
);

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
	marginBottom: "0.5em"
})
