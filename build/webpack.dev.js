const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.base.js')
const config = require('../config')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', { loader: 'css-loader', options: { importLoaders: 2 } }, 'postcss-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // cheap-module-eval-source-map is faster for development
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: config.dev.autoOpenBrowser,
    compress: true,
    port: config.dev.port,
    inline: true,
    overlay: true,
    hot: true,
    proxy: config.dev.proxy
  }
})
