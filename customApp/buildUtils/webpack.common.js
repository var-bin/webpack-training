// webpack.common.js

"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const InlineChunkWebpackPlugin = require("html-webpack-inline-chunk-plugin");
const tsLintLoaderOptions = require("../configuration/tslint/tslint-loader");
const webpack = require("webpack");

const config = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "..", "build")
  },
  module: {
    rules: [
      /* typescript */
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          happyPackMode: true,
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      },

      /* tslint */
      {
        test: /\.tsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "tslint-loader",
        options: tsLintLoaderOptions
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
    extensions: [
      ".tsx",
      ".ts",
      ".js"
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"], {
      root: path.resolve(__dirname, "..")
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      title: "Title from HtmlWebpackPlugin",
      template: path.resolve("./index.html"),
      minify: {
        collapseWhitespace: true
      }
    }),

    new InlineChunkWebpackPlugin({
      inlineChunks: ["manifest"]
    }),

    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = config;
