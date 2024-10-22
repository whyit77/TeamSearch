module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ['airbnb-base'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	rules: {
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'linebreak-style': 0,
	},
};
