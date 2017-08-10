// webpack.plugins.js

"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");

const config = {
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new UglifyJsWebpackPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};

module.exports = config;
