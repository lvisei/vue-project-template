const path = require('path');

// You can specify a specific path prefix based on your deployment.
const STATIC_PATH = '/'; // Example: 'https://your-domain-name/'
const publicPathPrefix = process.env.NODE_ENV === 'production' ? STATIC_PATH : '/';

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: publicPathPrefix,
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
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/'
  }
};
