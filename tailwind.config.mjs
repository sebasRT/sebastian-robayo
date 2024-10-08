/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			height: {
				'view': "calc(100vh - 5rem)"
			},
			minHeight: {
				'view': "calc(100vh - 5rem)"
			},
			colors: {
				'primary': {
					'50': '#eef6ff',
					'100': '#d8eaff',
					'200': '#badaff',
					'300': '#8bc4ff',
					'400': '#54a3ff',
					'500': '#2d7eff',
					'600': '#165cfa',
					'700': '#0f46e6',
					'800': '#1339ba',
					'900': '#163592',
					'950': '#122359',
				}
			}
		},

		fontFamily: {
			'montserrat': ['Montserrat', 'sans-serif'],
			'jura': ['Jura', 'sans-serif'],
		},

	},
	plugins: [],
}
