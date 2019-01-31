// WEBPACK CONFIGURATION FILE

const path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}