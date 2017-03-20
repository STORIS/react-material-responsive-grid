const combineLoaders = require('webpack-combine-loaders');
const cssnext = require('postcss-cssnext');
const cssImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

const config = {
	entry: [
		path.join(__dirname, 'src', 'index.js'),
	],
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader'],
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: combineLoaders([{
					loader: 'css-loader',
					query: {
						modules: true,
						localIdentName: '[name]__[local]___[hash:base64:5]',
						minimize: isProd,
					},
				}, {
					loader: 'postcss-loader',
				}]),
			}),
		}],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					cssImport(),
					cssnext(),
				],
			},
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin('styles.css'),
	],
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
};

if (isDev) {
	config.entry.unshift(
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server');
	config.devtool = 'source-map';
	config.devServer = {
		inline: true,
		historyApiFallback: true,
		host: '0.0.0.0',
		hot: true,
		port: 3000,
	};
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (isProd) {
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

config.entry.unshift('babel-polyfill'); // must always come first in entry list

module.exports = config;
