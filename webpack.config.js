var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'index'),
	output: {
			path: __dirname,
			filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'this title could be set in webpack.config.js'
		})
	]
};