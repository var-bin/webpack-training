// webpack.dev.js

"use strict";

const path = require("path");
const webpack = require("webpack");

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
          loader: "sass-loader"
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve("../build"),
    port: 3001,
    hot: true
  }
};

module.exports = config;
