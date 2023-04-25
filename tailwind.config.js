/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./helpers/**/*.{js,ts,jsx,tsx}',
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
			dropShadow: {
				'poke-name': '1px 1px 1px rgba(0, 0, 0, 0.75)',
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
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
				red: {
					DEFAULT: '#db0000',
				},
				grass: {
					DEFAULT: '#63BB5B',
					50: '#DEF1DD',
					100: '#D1EBCE',
					200: '#B5DFB2',
					300: '#9AD395',
					400: '#7EC778',
					500: '#63BB5B',
					600: '#499D41',
					700: '#367531',
					800: '#244E20',
					900: '#122610',
					950: '#081207',
				},
				poison: {
					DEFAULT: '#AB6AC8',
					50: '#F7F0FA',
					100: '#EEE1F4',
					200: '#DDC3E9',
					300: '#CDA6DE',
					400: '#BC88D3',
					500: '#AB6AC8',
					600: '#9343B7',
					700: '#72348E',
					800: '#512565',
					900: '#30163C',
					950: '#1F0E27',
				},
				fire: {
					DEFAULT: '#FF9C54',
					50: '#FFFFFF',
					100: '#FFFAF7',
					200: '#FFE3CE',
					300: '#FFCBA6',
					400: '#FFB47D',
					500: '#FF9C54',
					600: '#FF7C1C',
					700: '#E35F00',
					800: '#AB4800',
					900: '#733000',
					950: '#572400',
				},
				flying: {
					DEFAULT: '#92AADE',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#F0F3FA',
					300: '#D1DBF1',
					400: '#B1C2E7',
					500: '#92AADE',
					600: '#6788D1',
					700: '#3C67C4',
					800: '#2E5099',
					900: '#213A6E',
					950: '#1B2E59',
				},
				water: {
					DEFAULT: '#4D90D5',
					50: '#E2EDF8',
					100: '#D1E2F4',
					200: '#B0CEEC',
					300: '#8FB9E5',
					400: '#6EA5DD',
					500: '#4D90D5',
					600: '#2D74BD',
					700: '#225890',
					800: '#173C62',
					900: '#0D2135',
					950: '#07131E',
				},
				bug: {
					DEFAULT: '#90C12C',
					50: '#DCEEB6',
					100: '#D4EBA6',
					200: '#C4E384',
					300: '#B4DB63',
					400: '#A4D442',
					500: '#90C12C',
					600: '#6E9322',
					700: '#4C6617',
					800: '#2A380D',
					900: '#080A02',
					950: '#000000',
				},
				normal: {
					DEFAULT: '#9099A1',
					50: '#F3F4F5',
					100: '#E8EAEC',
					200: '#D2D6D9',
					300: '#BCC2C6',
					400: '#A6ADB4',
					500: '#9099A1',
					600: '#727D87',
					700: '#586168',
					800: '#3F454A',
					900: '#25282C',
					950: '#181A1C',
				},
				electric: {
					DEFAULT: '#F3D23B',
					50: '#FEFAE8',
					100: '#FCF5D5',
					200: '#FAECAE',
					300: '#F8E488',
					400: '#F5DB61',
					500: '#F3D23B',
					600: '#E8C10E',
					700: '#B3950B',
					800: '#7E6908',
					900: '#493D04',
					950: '#2F2703',
				},
				ground: {
					DEFAULT: '#D97746',
					50: '#F8E7DE',
					100: '#F5DBCD',
					200: '#EEC2AC',
					300: '#E7A98A',
					400: '#E09068',
					500: '#D97746',
					600: '#C05A27',
					700: '#91441E',
					800: '#622E14',
					900: '#34180B',
					950: '#1D0D06',
				},
				fairy: {
					DEFAULT: '#EC8FE6',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FEF8FD',
					300: '#F8D5F6',
					400: '#F2B2EE',
					500: '#EC8FE6',
					600: '#E45FDB',
					700: '#DC2FD1',
					800: '#B41FAA',
					900: '#84167D',
					950: '#6C1266',
				},
				fighting: {
					DEFAULT: '#CE4069',
					50: '#F3D2DC',
					100: '#EFC2CF',
					200: '#E7A1B5',
					300: '#DF819C',
					400: '#D66082',
					500: '#CE4069',
					600: '#AA2C50',
					700: '#7E203B',
					800: '#511526',
					900: '#240911',
					950: '#0E0407',
				},
				psychic: {
					DEFAULT: '#F97176',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FEE6E7',
					300: '#FCBFC2',
					400: '#FB989C',
					500: '#F97176',
					600: '#F73B42',
					700: '#F00A13',
					800: '#BA080E',
					900: '#84060A',
					950: '#690408',
				},
				rock: {
					DEFAULT: '#C7B78B',
					50: '#FFFFFF',
					100: '#FCFBF9',
					200: '#EFEADE',
					300: '#E2D9C2',
					400: '#D4C8A7',
					500: '#C7B78B',
					600: '#B5A065',
					700: '#98834A',
					800: '#726337',
					900: '#4D4225',
					950: '#3A321C',
				},
				ice: {
					DEFAULT: '#74CEC0',
					50: '#FCFEFE',
					100: '#EDF9F7',
					200: '#CEEEE9',
					300: '#B0E3DB',
					400: '#92D9CE',
					500: '#74CEC0',
					600: '#4BBFAD',
					700: '#379B8B',
					800: '#287266',
					900: '#194841',
					950: '#12332E',
				},
				steel: {
					DEFAULT: '#5A8EA1',
					50: '#CFDEE4',
					100: '#C2D5DD',
					200: '#A7C4CE',
					300: '#8DB2BF',
					400: '#73A0B1',
					500: '#5A8EA1',
					600: '#466E7D',
					700: '#324F59',
					800: '#1E2F35',
					900: '#0A0F11',
					950: '#000000',
				},
				ghost: {
					DEFAULT: '#5269AC',
					50: '#CED5E8',
					100: '#C0C9E1',
					200: '#A5B1D4',
					300: '#8999C7',
					400: '#6D81BA',
					500: '#5269AC',
					600: '#405286',
					700: '#2E3B60',
					800: '#1C233A',
					900: '#0A0C14',
					950: '#010101',
				},
				dragon: {
					DEFAULT: '#096DC4',
					50: '#8BC6FA',
					100: '#77BDF9',
					200: '#50A9F7',
					300: '#2996F5',
					400: '#0B83EB',
					500: '#096DC4',
					600: '#074F8E',
					700: '#043159',
					800: '#021423',
					900: '#000000',
					950: '#000000',
				},
				dark: {
					DEFAULT: '#5A5366',
					50: '#B6B1C0',
					100: '#ACA6B6',
					200: '#978FA4',
					300: '#827992',
					400: '#6E657C',
					500: '#5A5366',
					600: '#3F3A47',
					700: '#232128',
					800: '#080709',
					900: '#000000',
					950: '#000000',
				},
			},
			backgroundImage: {
				'card-grass': "url('/images/bkg_card_grass.jpg')",
				'card-poison': "url('/images/bkg_card_poison.jpg')",
				'card-fire': "url('/images/bkg_card_fire.jpg')",
				'card-flying': "url('/images/bkg_card_flying.jpg')",
				'card-water': "url('/images/bkg_card_water.jpg')",
				'card-bug': "url('/images/bkg_card_bug.jpg')",
				'card-normal': "url('/images/bkg_card_normal.jpg')",
				'card-electric': "url('/images/bkg_card_electric.jpg')",
				'card-ground': "url('/images/bkg_card_ground.jpg')",
				'card-fairy': "url('/images/bkg_card_fairy.jpg')",
				'card-fighting': "url('/images/bkg_card_fighting.jpg')",
				'card-psychic': "url('/images/bkg_card_psychic.jpg')",
				'card-rock': "url('/images/bkg_card_rock.jpg')",
				'card-ice': "url('/images/bkg_card_ice.jpg')",
				'card-steel': "url('/images/bkg_card_steel.jpg')",
				'card-ghost': "url('/images/bkg_card_ghost.jpg')",
				'card-dragon': "url('/images/bkg_card_dragon.jpg')",
				'card-dark': "url('/images/bkg_card_dark.jpg')",
				'icon-grass': "url('/images/bkg_icon_grass.png')",
				'icon-poison': "url('/images/bkg_icon_poison.png')",
				'icon-fire': "url('/images/bkg_icon_fire.png')",
				'icon-flying': "url('/images/bkg_icon_flying.png')",
				'icon-water': "url('/images/bkg_icon_water.png')",
				'icon-bug': "url('/images/bkg_icon_bug.png')",
				'icon-normal': "url('/images/bkg_icon_normal.png')",
				'icon-electric': "url('/images/bkg_icon_electric.png')",
				'icon-ground': "url('/images/bkg_icon_ground.png')",
				'icon-fairy': "url('/images/bkg_icon_fairy.png')",
				'icon-fighting': "url('/images/bkg_icon_fighting.png')",
				'icon-psychic': "url('/images/bkg_icon_psychic.png')",
				'icon-rock': "url('/images/bkg_icon_rock.png')",
				'icon-ice': "url('/images/bkg_icon_ice.png')",
				'icon-steel': "url('/images/bkg_icon_steel.png')",
				'icon-ghost': "url('/images/bkg_icon_ghost.png')",
				'icon-dragon': "url('/images/bkg_icon_dragon.png')",
				'icon-dark': "url('/images/bkg_icon_dark.png')",
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
