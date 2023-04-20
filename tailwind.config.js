/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			mobile: '0px',
			tablet: '767px',
			laptop: '991px',
			desktop: '1281px',
		},
		extend: {
			fontFamily: {
				body: ['Open Sans', 'sans-serif'],
				heading: ['Lato', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#FFCC00',
					100: '#D5A100',
				},
				secondary: {
					DEFAULT: '#0075BE',
					100: '#0A285F',
				},
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	],
};
