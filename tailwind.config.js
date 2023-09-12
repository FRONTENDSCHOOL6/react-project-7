/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				white: "#ffffff",
				gray100: "#e1e1e1",
				gray200: "#c4c4c4",
				gray300: "#a6a6a6",
				gray400: "#898989",
				gray500: "#6b6b6b",
				gray600: "#565656",
				gray700: "#404040",
				gray800: "#2b2b2b",
				gray900: "#151515",
				primary: "#E93945",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [],
}
