// webpack.config.js

"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "build")
  },
  module: {
    rules: [
      /* typescript */
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },

      /* css */

      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }]
      },

      /* scss */
      {
        test: /\.scss$/,
        use: [
        {
          loader: "style-loader" // creates style nodes from JS strings
        },
        {
          loader: "css-loader" // translates CSS into CommonJS
        },
        {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },

      /* images */
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }]
      },

      /* fonts */
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: [
      ".tsx",
      ".ts",
      ".js"
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, "node_modules")
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),

    new HtmlWebpackPlugin({
      title: "Title from HtmlWebpackPlugin",
      template: path.resolve("./index.html")
    }),

    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve("./build"),
    port: 3001,
    hot: true
  }
};
