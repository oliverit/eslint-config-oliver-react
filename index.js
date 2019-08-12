const eslintrc = require('./eslintrc.json')

module.exports = {
	...eslintrc,
	extends: [
		require.resolve('eslint-config-oliver-base'),
		'plugin:react/recommended'
	]
}
