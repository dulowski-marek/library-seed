const path = require('path');
const webpack = require('webpack');

const MinifyPlugin = require('babel-minify-webpack-plugin'),
  AnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'index.umd.js',
    library: {
      root: 'something',
      commonjs: 'something',
      amd: 'something'
    },
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new MinifyPlugin(),
    new AnalyzePlugin({
      analyzerMode: 'static',
      reportFilename: './.artifacts/analyzer.html'
    })
  ]
}