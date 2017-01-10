const path = require('path'),
      webpack = require('webpack');

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
          presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.jsx', '.js', '']
  },
}
