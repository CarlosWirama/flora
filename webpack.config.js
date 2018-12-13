var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    './webclient/src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./webclient/src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'webclient/src')
    }]
  },
  devServer: {
    historyApiFallback: true,
  }
};
