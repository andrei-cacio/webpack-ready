const path = require('path');

module.exports = {
  context: path.resolve('./src'),
  entry: 'index.js',
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
          presets: ['es2015']
        }
      }
    ]
  }
};
