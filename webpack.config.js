const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname + '/public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react', 'stage-2'],
					//plugins: ["transform-object-rest-spread"]
				}

			},
			{
				loader: 'json-loader',
				test: /\.json$/,
				exclude: /node_modules/
			}
		]
	}
}