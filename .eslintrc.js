module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['react-app', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
};
