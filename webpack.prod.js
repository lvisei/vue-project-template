const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.base.js');
const merge = require('webpack-merge');

const cssRules = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: "../"
      }
    },
    { loader: 'css-loader', options: { minimize: { discardComments: { removeAll: true } }, importLoaders: 1 } },
    'postcss-loader'
  ]
};

common.module.rules.push(cssRules);

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      // favicon: './src/assets/images/favicon.ico'
      minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true }
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[chunkhash].css' }),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});
