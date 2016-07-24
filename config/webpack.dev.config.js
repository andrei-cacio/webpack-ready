const ExtractTestPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const styleExtractor = new ExtractTestPlugin('style.css');

module.exports = {
  context: path.resolve('./src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'index.js'
  ],
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets',
    path: 'build'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /(\.css|.less)$/,
        loader: styleExtractor.extract('css!less')
      }
    ]
  },
  plugins: [ styleExtractor ]
};
