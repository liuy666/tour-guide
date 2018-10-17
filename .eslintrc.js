module.exports = {
<<<<<<< HEAD
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		"no-unused-vars": 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	globals: {
		AMap: true
	}
}
=======
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        AMap: true
    }
}
>>>>>>> 59177fe0a6358e5b9dac48e2d69b330cc7a694ba
