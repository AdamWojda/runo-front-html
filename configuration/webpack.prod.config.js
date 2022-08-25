/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfiguration = require('../webpack.config');
const WebpackCriticalCSSInliner = require('webpack-critical-css-inliner');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

module.exports = merge(webpackConfiguration, {
  mode: 'production',

  /* Manage source maps generation process. Refer to https://webpack.js.org/configuration/devtool/#production */
  devtool: false,

  /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  /* Performance treshold configuration values */
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  /* Additional plugins configuration */
  plugins: [
    new WebpackCriticalCSSInliner({
      // Your entrypoint
      base: 'dist/',

      // HTML source file
      src: 'index.html',

      // HTML target file
      target: 'index-critical.html',

      // Add Google Fonts to critical CSS
      inlineGoogleFonts: true,

      // Minify all styles
      minify: true,

      // ignore styles from the following stylesheets
      ignoreStylesheets: [/bootstrap/],

      // inline styles with the following CSS rules
      whitelist: /.header|\.nav|\.carousel|\.section/

    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css)$/,
    }),
  ],
});
