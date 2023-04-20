module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y', 'prettier'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-console': 'warn',
		'react/prop-types': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				'jsx-single-quote': true,
				semi: true,
				useTabs: true,
			},
		],
	},
	globals: {
		setupComponent: true,
		testGraphqlError: true,
	},
};
