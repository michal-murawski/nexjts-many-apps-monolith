/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./modules/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'../../packages/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Complex site-specific column configuration
				homeWrapper: 'repeat(auto-fill, minmax(298px, 1fr))',
			},
			colors: {
				primary: {
					DEFAULT: '#ff671d',
					light: '#ff854a',
					superLight: '#ffe1d2',
				},
				secondary: {
					DEFAULT: '#202945',
					light: '#5f6579',
					superLight: '#dfe2f0',
				},
				gray: {
					backdrop: 'rgba(0, 0, 0, 0.4)',
					dark: '#c4c4c4',
					DEFAULT: '#dadce0',
					light: '#f5f5f5',
				},
				success: {
					DEFAULT: '#37bf66',
					light: '#73d294',
				},
				error: '#eb1649',
			},
			borderRadius: {
				primary: '10px',
			},
			boxShadow: {
				primary: '0px 4px 10px rgba(0, 0, 0, 0.1)',
				icon: '0px 0px 10px rgba(0, 0, 0, 0.1)',
				iconSwipper: '0px 2px 4px rgba(0, 0, 0, 0.15)',
			},
			height: {
				navBarHeight: '3.75rem',
			},
		},
		screens: {
			xxs: '416px',
			xs: '536px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1440px',
		},
		fontFamily: {
			primary: ['Inter', 'sans-serif'],
			secondary: ['Open Sans'],
		},
	},
	plugins: [],
};
