// webpack.dev.js

"use strict";

const path = require("path");
const webpack = require("webpack");
const postcssLoaderOptions = require("../configuration/postcss/postcss-loader");

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
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  /**
   * https://webpack.js.org/guides/development/#using-webpack-dev-server
   */
  devServer: {
    contentBase: path.resolve("../build"),
    port: 3001,
    stats: "minimal",
    hot: true
  }
};

module.exports = config;
