// webpack.module.js

"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            }
          ]
        })
      }
    ]
  }
};

module.exports = config;
