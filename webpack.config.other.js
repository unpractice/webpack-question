var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css')
			},
			{
				test: /\.(png|jpg)$/, 
				loader: 'file?name=images/[hash].[ext]',
			},
			{
				test: /\.html$/, 
				loader: 'file?name=[hash].[ext]',
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[hash].css'),
		new HtmlWebpackPlugin({  // Also generate a test.html 
			filename: '../test.html',
			template: 'index.html'
		})
	]
};