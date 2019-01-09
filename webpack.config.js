const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es2015.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};