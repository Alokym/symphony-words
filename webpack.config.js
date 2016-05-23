/**
 * Created by vst on 5/14/2016.
 */

"use strict";

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var buildPath = path.resolve(__dirname, './build');

module.exports = {
  entry: './src/entry.js',

  output: {
    path: buildPath,
    filename: "scripts/app.bundle.js",
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      _: 'lodash'
    })
  ],

  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: buildPath
  },

  devtool: 'eval'
};