const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const merge = require('webpack-merge')

const common = require('./webpack.base.js')
const config = require('../config')
const utils = require('./utils')

const webpackConfig = merge(common, {
  output: {
    filename: 'js/[name].[chunkhash].js'
  },
  mode: 'production',
  devtool: config.build.jsSourceMap ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
    // https://webpack.js.org/plugins/split-chunks-plugin/
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // @reference: https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    new MiniCssExtractPlugin({ filename: utils.assetsPath('css/[name].[contenthash].css') }),
    new OptimizeCssnanoPlugin({
      sourceMap: config.build.cssSourceMap,
      cssnanoOptions: {
        // https://cssnano.co/guides/optimisations
        preset: ['default', { mergeLonghand: false }]
      }
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
})

if (config.build.bundleAnalyzerReport) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
