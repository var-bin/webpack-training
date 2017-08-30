// webpack.common.js

"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

console.log("path: ", path.resolve("./src/index.ts"), "\n", path.join("..", "src", "index.ts"));

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
    })
  ]
};

module.exports = config;
