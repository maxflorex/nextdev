/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'mx': {
					100: '#F8F8F8',
					200: '#DBDBDB',
					300: '#61EFDC',
					400: '#30B4AC',
					500: '#242424'
				},
			},
			backgroundImage: {
				'subtle-pattern': "url('/white-waves.png')",
				'texture': "url('https://www.transparenttextures.com/patterns/dark-stripes-light.png')",
				'texture2': 'url("https://www.transparenttextures.com/patterns/green-fibers.png")',
				'texture3': 'url("https://www.transparenttextures.com/patterns/grilled-noise.png")',
				'texture4': 'url("https://www.transparenttextures.com/patterns/black-orchid.png")'
			}
		},
		fontFamily: {
			sans: ['var(--font-space)']
		},

	},

	plugins: [],
}