// webpack.common.js

"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const tsLintLoaderOptions = require("../configuration/tslint/tslint-loader");

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

      /* css */
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }]
        })
      },

      /* scss */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            // translates CSS into CommonJS
            loader: "css-loader"
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader"
          }]
        })
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

    new HtmlWebpackPlugin({
      title: "Title from HtmlWebpackPlugin",
      template: path.resolve("./index.html")
    }),

    new ExtractTextPlugin({
      filename: "css/[name].css"
    }),

    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = config;
