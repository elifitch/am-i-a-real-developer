import { css } from 'glamor';
import { darkGray } from './color';

const html = css.global(
	'html', { 
		color: darkGray
	}
);

export const GlobalStyle = css(html);