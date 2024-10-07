/** @type {import('tailwindcss').Config} */
export default {
	content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
	theme: {
		colors: {
			'colorBackground': '#121212',
			'colorBackgroundLighter': '#292929',
			'colorAccent': '#A7D9D8',
			'colorText': '#D7E0E0',
			'colorTextLight': '#A7B0B0',
		},
		extend: {},
	},
	plugins: [],
}
