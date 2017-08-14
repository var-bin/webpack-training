// webpack.plugins.js

"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const commonPaths = require("./commonPaths");

const config = {
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css"
    }),

    /* new UglifyJsWebpackPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
          beautify: false
        }
      }
    }) */

    new HtmlWebpackPlugin({
      title: "test HtmlWebpackPlugin"
    }),

    new CleanWebpackPlugin([commonPaths.outputPath], {
      root: commonPaths.webpackConfigPath
    })
  ]
};

module.exports = config;
