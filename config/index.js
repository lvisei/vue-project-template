const path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    // Assets folder Directory
    assetsSubDirectory: '',
    // You can specify a specific path prefix based on your deployment.
    // Example: 'https://your-domain-name/'
    assetsPublicPath: './',
    jsSourceMap: true,
    // (https://github.com/webpack/css-loader#sourcemaps)
    cssSourceMap: false,
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8100,
    autoOpenBrowser: true,
    // Assets folder Directory
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxy: {
      '/api': {
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/v2'
        }
      }
    }
  }
};
