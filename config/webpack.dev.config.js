const ExtractTestPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const styleExtractor = new ExtractTestPlugin('style.css');

module.exports = {
  context: path.resolve('./src'),
  entry: 'index.js',
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
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /(\.css|.less)$/,
        loader: styleExtractor.extract('css!less')
      }
    ]
  },
  plugins: [ styleExtractor ]
};
