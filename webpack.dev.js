const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');

const cssRules = {
  test: /\.css$/,
  use: ['vue-style-loader', 'style-loader', 'css-loader']
};

common.module.rules.push(cssRules);

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      // favicon: './src/assets/images/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    compress: true,
    port: 8100,
    inline: true,
    overlay: true,
    hot: true
  }
});
