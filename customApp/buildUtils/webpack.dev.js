// webpack.dev.js

"use strict";

const webpack = require("webpack");
const postcssLoaderOptions = require("../configuration/postcss/postcss-loader");

const constants = require("./constants");

const config = {
  module: {
    rules: [
      /* css */
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
          options: postcssLoaderOptions
        }]
      },

      /* scss */
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
          options: postcssLoaderOptions
        }, {
          loader: "sass-loader"
        }]
      }
    ],

    noParse: [
      /angular\/angular.js/,
      /lodash\/lodash.js/
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  /**
   * https://webpack.js.org/guides/development/#using-webpack-dev-server
   */
  devServer: {
    contentBase: constants.devServer.contentBase,
    port: constants.devServer.port,
    stats: "minimal",
    hot: true
  }
};

module.exports = config;
