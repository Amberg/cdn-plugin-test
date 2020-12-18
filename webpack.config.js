const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new WebpackCdnPlugin({ // this plugins adda a / to the path "<script src="main.js">" --> <script src="/main.js">
        modules: [],
        publicPath: '/node_modules'
      })
  ]
};