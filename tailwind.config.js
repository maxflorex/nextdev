/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'mx': {
					100: '#EDF5E0',
					200: '#8DE4AF',
					300: '#5CDB94',
					400: '#389583',
					500: '#05396B'
				},
			},
		},
		fontFamily: {
			'sans': ['Ubuntu', 'sans-serif']
		},
	},
	plugins: [],
}