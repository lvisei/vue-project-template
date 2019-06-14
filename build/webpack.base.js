const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('../config')
const utils = require('./utils')

const env = process.env.NODE_ENV

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const baseConfig = {
  entry: resolve('src/main.js'),
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].[hash].js',
    publicPath: env === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        include: [resolve('src')],
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /.(js|jsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use:
          env === 'production'
            ? [
                { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                'less-loader'
              ]
            : [
                'vue-style-loader',
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                'less-loader'
              ]
      },
      {
        test: /\.scss$/,
        use:
          env === 'production'
            ? [
                { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                'sass-loader'
              ]
            : [
                'vue-style-loader',
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                'sass-loader'
              ]
      },
      {
        test: /\.sass$/,
        use:
          env === 'production'
            ? [
                { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                { loader: 'sass-loader', options: { indentedSyntax: true } }
              ]
            : [
                'vue-style-loader',
                { loader: 'css-loader', options: { importLoaders: 2 } },
                'postcss-loader',
                { loader: 'sass-loader', options: { indentedSyntax: true } }
              ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: utils.assetsPath('img/[name].[hash:8].[ext]')
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: utils.assetsPath('img/[name].[hash:8].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: utils.assetsPath('media/[name].[hash:8].[ext]')
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin(), new VueLoaderPlugin()]
}

module.exports = baseConfig
