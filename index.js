module.exports = Object.assign({}, require('./eslintrc.json'), {
	extends: [
		require.resolve('eslint-config-oliver-base'),
		'plugin:react/recommended'
	]
})
