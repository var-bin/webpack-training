// webpack.dev.js

"use strict";

const path = require("path");
const webpack = require("webpack");

const config = {
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
