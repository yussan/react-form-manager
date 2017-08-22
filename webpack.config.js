const path = require('path');
const webpack = require('webpack')
const version = '0.0.1'

module.exports = {
  entry: {
    '1.register-form': ['./dist/example/src/1.register-form.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/example/dist')
  },

  resolve: {
      extensions: ['.js', '.jsx'],
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: [
                {
                  loader: 'babel-loader'
                }
              ]             
          }
      ]
  }
}