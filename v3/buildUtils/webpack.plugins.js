// webpack.plugins.js

"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
};

module.exports = config;
