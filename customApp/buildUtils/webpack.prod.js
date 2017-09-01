// webpack.prod.js

"use strict";

const os = require("os");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const postcssLoaderOptions = require("../configuration/postcss/postcss-loader");

const config = {
  module: {
    rules: [
      /* css */
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "postcss-loader",
            options: postcssLoaderOptions
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
          }, {
            loader: "postcss-loader",
            options: postcssLoaderOptions
          }, {
            // compiles Sass to CSS
            loader: "sass-loader"
          }]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].css"
    }),

    new LodashModuleReplacementPlugin(),

    new UglifyJSPlugin({
      parallel: {
        cache: true,
        workers: os.cpus().length
      },
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    })
  ]
};

module.exports = config;
