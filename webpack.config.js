var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/main.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
      new CopyWebpackPlugin([
          // Copy directory contents to {output}/to/directory/
          { from: 'src/css', to: 'css' },
          { from: 'src/index.html', to: 'index.html'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  }
};
