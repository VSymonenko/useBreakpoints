const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'es2015.min.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};