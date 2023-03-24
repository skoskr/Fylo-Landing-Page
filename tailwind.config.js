/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			screens: {
				'lg': "1024px",
				'xl': "1280px",
				'2xl': "1536px",
			},
		},

		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				open: ['Open Sans', 'sans-serif'],
			},

			colors: {
				verydarkblue: 'hsl(243, 87%, 12%)',
				desaturatedblue: 'hsl(238, 22%, 44%)',
				brightblue: 'hsl(224, 93%, 58%)',
				hbrightblue: 'hsl(224, 60%, 60%)',
				moderatecyan: 'hsl(170, 45%, 43%)',
				hmoderatecyan: 'hsl(170, 86%, 43%)',
				lightgrayishblue: 'hsl(240, 75%, 98%)',
				lightgray: 'hsl(0, 0%, 75%)',
			},

			spacing: {
				128: "32rem",
				160: "40rem",
				18: "4.05rem",
			},
		},
	},
	plugins: [],
};
