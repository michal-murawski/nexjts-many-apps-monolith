import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#fcba03',
		},
	},
});

export function createEmotionCache() {
	return createCache({ key: 'css', prepend: true });
}
