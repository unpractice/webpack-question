var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: ['./main.js', './template/js/test.js'],
	output: {
		filename: 'js/[hash].js',
		path: 'anyname/assets/',
		publicPath: 'http://www.example.com/anyname/assets/'
	},
	module: {
		loaders:[
			{
				test: /\.html$/,
				loader: ExtractTextPlugin.extract('html')
			},
			{
				test: /\.(png|jpg)$/, 
				loader: 'file?name=images/[hash].[ext]',
			},
			{
				test: /\.css$/, 
				loader: 'file?name=css/[hash].[ext]',
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("../index.html"),
	]
};