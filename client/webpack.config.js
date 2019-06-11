const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: ['./src/javascript/app.js', './src/styles/app.sass'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      models: path.resolve(__dirname, 'src/javascript/models'),
      views: path.resolve(__dirname, 'src/javascript/views'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
      {
        test: /\.jade|pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=assets/[name].[ext]',
      },
      {
        test: /\.(ico)$/,
        use: 'file-loader?name=assets/[name].[ext]',
      },
    ],
  },
  plugins: [
    // Global dependencies
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
      Backbone: 'backbone',
      Bb: 'backbone',
      Marionette: 'backbone.marionette',
      Mn: 'backbone.marionette',
    }),

    // Bundle html and inject js
    new HtmlWebpackPlugin({
      title: 'Pana Full Stack Challenge',
      filename: 'index.html',
      favicon: 'src/assets/favicon.ico',
      template: 'src/public/index.jade',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/**/**.*', to: 'assets/[name].[ext]' },
    ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3041,
    open: true,
    overlay: true,
    historyApiFallback: true,
    stats: {
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: true,
      errorDetails: true,
      colors: true,
      children: false,
      performance: true,
      timings: true,
    },
  },
};
