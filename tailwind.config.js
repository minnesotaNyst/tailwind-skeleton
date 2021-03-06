module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: {
		content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
	},
	darkMode: false, //or 'media' or 'class'
	theme: {
		rotate: {
			0: '0deg',
			45: '45deg',
			90: '90deg',
			135: '125deg',
			180: '180deg',
			225: '225deg',
			270: '270deg',
			315: '315deg',
			360: '360deg'
		},
		extend: {
			maxWidth: {
				'8xl': '1920px'
			},
			spacing: {
				sevenEighths: '0.875vw',
				twoAndOneFourth: '2.25vw'
			},
			transitionDuration: {
				0: '0ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms',
				3000: '3000ms'
			},
			fontFamily: {
				header: ['goudy-bookletter-1911', 'serif'],
				poppins: ['poppins', 'sans-serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif']
			},
			colors: {
				'primary-0': 'var(--primary-0)',
				'primary-1': 'var(--primary-1)',
				'primary-2': 'var(--primary-2)',
				'secondary-0': 'var(--secondary-0)',
				'secondary-1': 'var(--secondary-1)',
				'secondary-2': 'var(--secondary-2)',
				'hover-0': 'var(--hover-0)',
				'hover-1': 'var(--hover-1)',
				'hover-2': 'var(--hover-2)',
				'focus-0': 'var(--focus-0)',
				'focus-1': 'var(--focus-1)',
				'focus-2': 'var(--focus-2)',
				'accents-0': 'var(--accents-0)',
				'accents-1': 'var(--accents-1)',
				'accents-2': 'var(--accents-2)',
				'accents-3': 'var(--accents-3)',
				'accents-4': 'var(--accents-4)',
				'accents-5': 'var(--accents-5)',
				'accents-6': 'var(--accents-6)',
				'accents-7': 'var(--accents-7)',
				'accents-8': 'var(--accents-8)',
				'accents-9': 'var(--accents-9)',
				black: '#000000',
				white: '#FFFFFF',
				success: '#0070F3',
				cyan: '#79FFE1',
				blizzardBlue: '#B3DDF2',
				chicagoRed: '#FF0000',
				customGray: '#D0D0D0',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#CC6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399',
				oneFiveBlack: '#151515',
				fZeroOneTwoWhite: '#F0F1F2',
				eaWhite: '#EAEAEA',
				afWhite: '#AFAFAF',
				fiveOBlack: '#505050',
				everythingIsBlue: '#007ACC',
				newlineRed: '#FA5252',
				newlinePink: '#BE4BDB',
				newlinePurple: '#4C6EF5',
				newlineGreen: '#40C057',
				newlineYellow: '#FAB005',
				newlineOrange: '#E535AB',
				jujiMintCream: '#F1FCF7',
				jujiSeaGreen: '#168644',
				jujiCastletonGreen: '#00523C',
				jujiOldLace: '#FFF9E9',
				jujiMaxYellowRed: '#F6BD60',
				jujiMarigold: '#E6A63E'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				hero: {
					transform: 'translate3d(0px, 0px, 0px)'
				}
			},
			animation: {
				wiggle: 'wiggle 10s ease-in-out infinite',
				hero: 'hero 1s ease-in-out infinite',
				slowPing: 'pulse 5s cubic-bezier(0, 0, 0.2, 1) infinite'
			},
			boxShadow: {
				'outline-2': '0 0 0 2px var(--accents-2)',
				magical:
					'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
			}
		},
		variants: {
			textColor: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
			textTransform: [
				'responsive',
				'last',
				'first',
				'hover',
				'focus',
				'even',
				'odd'
			],
			transform: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
			padding: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
			fontSize: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
			gap: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
			stroke: [
				'responsive',
				'hover',
				'focus',
				'last',
				'first',
				'even',
				'odd',
				'group-hover'
			],
			fill: [
				'responsive',
				'hover',
				'focus',
				'last',
				'first',
				'even',
				'odd',
				'group-hover'
			],
			gridTemplateColumns: [
				'responsive',
				'last',
				'first',
				'hover',
				'focus',
				'even',
				'odd'
			],
			animate: [
				'responsive',
				'hover',
				'focus',
				'last',
				'first',
				'motion-safe',
				'motion-reduce',
				'even',
				'odd'
			],
			transitionProperty: [
				'responsive',
				'hover',
				'focus',
				'last',
				'first',
				'motion-safe',
				'motion-reduce',
				'even',
				'odd'
			],
			transitionDuration: [
				'responsive',
				'last',
				'first',
				'hover',
				'focus',
				'even',
				'odd'
			],
			transitionTimingFunction: [
				'responsive',
				'last',
				'first',
				'hover',
				'focus',
				'even',
				'odd'
			],
			transitionDelay: [
				'responsive',
				'last',
				'first',
				'hover',
				'focus',
				'even',
				'odd'
			],
			scale: [
				'responsive',
				'hover',
				'focus',
				'active',
				'group-hover',
				'first',
				'last',
				'even',
				'odd'
			],
			rotate: [
				'responsive',
				'hover',
				'focus',
				'active',
				'group-hover',
				'first',
				'last',
				'even',
				'odd'
			]
		}
	},
	plugins: [require('tailwindcss-gradients')]
};
