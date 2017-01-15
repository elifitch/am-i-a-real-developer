import { css, after, before } from 'glamor';
import { threeDText } from '../mixins';
import { yellow, purple } from '../color';

export const alpha = css(
	{
		display: 'inline-block',
		fontSize: '6em',
		fontFamily: 'brandon-grotesque',
		textTransform: 'uppercase',
		textAlign: 'center',
		fontWeight: '800',
		fontStyle: 'italic',
		letterSpacing: '0.05em',
		color: purple,
		position: 'relative',
		padding: '0.5em',
		textShadow: threeDText(yellow, 10),
		whiteSpace: 'nowrap'
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

export const copy = css({
	fontFamily: 'Pinopolis-Regular'
})
