const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1280px',
			xxl: '1440px',
		},
		colors: {
			...defaultTheme.colors,
			white: '#FFFFFF',
			background: {
				code: '#0D1020',
				high: '#262B42',
				container: '#131728',
				customButton: '#262C56',
				bg: '#191D30',
			},
			border: 'rgba(255, 255, 255, 0.05)',
			contact: '#f7fafc',
			gray: {
				50: '#F9FAFB',
				100: '#D1D5DB',
				200: '#E5E7EB',
				400: '#9CA3AF',
				500: '#6B7280',
				700: '#374151',
				800: '#1F2937',
				900: '#111827',
			},
			ghostWhite: {
				50: '#f6fafd',
				100: '#EAECF0',
				150: '#98A2B3',
				200: '#344054',
				250: '#D0D5DD',
			},
			lightViolet: {
				50: '#d8b1ff',
			},
			link: {
				200: '#a041ff',
			},
			subtle: {
				50: '#ECF1F6',
				100: '#D5DEEC',
				200: '#ACBCD3',
				300: '#7D94B2',
				400: '#617192',
				500: '#4D5674',
				600: '#3B4057',
				700: '#232739',
				800: '#181A25',
				900: '#111827',
			},
			primary: {
				base: '#9E3DFF',
				unknown: '#7E31CC',
				50: '#ECF1F6',
				100: 'rgba(158, 61, 255, 0.2)',
				200: 'rgba(158, 61, 255, 0.4)',
				300: 'rgba(158, 61, 255, 0.6)',
				400: 'rgba(97, 113, 146, 1)',
				500: '#262b42',
				600: '#7F56D9',
				700: '#6941C6',
			},
			secondary: {
				base: '#0D1020',
				50: '#363C59',
				100: 'rgba(38, 43, 66, 1)',
				200: 'rgba(25, 29, 48, 1)',
				300: 'rgba(19, 23, 40, 1)',
			},
			support1: {
				base: '#EDEEEF',
				300: 'rgba(241, 242, 243, 0.6)',
			},
			support2: {
				base: '#42CB99',
			},
			support3: {
				base: '#FBA33C',
				200: 'rgba(251, 163, 60, 0.4)',
			},
			support4: {
				base: '#5F6DFB',
				100: 'rgba(95, 109, 251, 0.2)',
				200: 'rgba(95, 109, 251, 0.4)',
			},
			support5: {
				200: 'rgba(221, 99, 99, 0.4)',
			},
			supportShamrock: {
				base: '#42CB99',
				100: 'rgba(52, 211, 153, 0.2)',
				200: 'rgba(66, 203, 153, 0.4)',
				300: 'rgba(66, 203, 153, 0.6)',
			},
			neonCarrot: {
				base: '#5F6DFB',
				50: 'rgba(95, 109, 251, 0.1)',
			},
			red: {
				400: '#F87171',
				500: '#EF4444',
			},
			slate: {
				700: 'rgb(51 65 85)',
			},
			error: {
				300: '#FDA29B',
				400: 'rgba(234, 79, 73, 1)',
				500: '#F04438',
			},
		},
		fontFamily: {
			body: ['Lab Grotesque'],
			helvetica: ['Helvetica Now Text'],
			inter: ['Inter'],
		},
		container: {
			'max-width': '1162px',
		},
		extend: {
			zIndex: {
				'-1': '-1',
			},
			blur: {
				xxl: '160px',
				xxxl: '320px',
			},
		},
		fontFamily: {
			roboto: ['Roboto Mono', 'Open Sans'],
		},
	},
	variants: {
		extend: {
			padding: ['hover'],
			borderWidth: ['hover', 'focus'],
			inset: ['hover', 'focus'],
			boxSizing: ['hover', 'focus'],
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/forms'),
	],
};
