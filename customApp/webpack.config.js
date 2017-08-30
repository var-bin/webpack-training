// webpack.config.js

"use strict";

const path = require("path");
const os = require("os");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const commonWebpackConfig = require("./buildUtils/webpack.common");
const merge = require("webpack-merge");

const ENV = process.env.NODE_ENV;

module.exports = merge(commonWebpackConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new UglifyJSPlugin({
      parallel: {
        cache: true,
        workers: os.cpus().length
      }
    })
  ],
  devServer: {
    contentBase: path.resolve("./build"),
    port: 3001,
    hot: true
  }
});
