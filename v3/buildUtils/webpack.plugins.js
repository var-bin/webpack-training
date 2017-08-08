// webpack.plugins.js

"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
}
