// webpack.common.js

"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const InlineChunkWebpackPlugin = require("html-webpack-inline-chunk-plugin");
const tsLintLoaderOptions = require("../configuration/tslint/tslint-loader");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const constants = require("./constants");

const config = {
  entry: constants.entry,
  output: constants.output,
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
            name: constants.imagesFilename
          }
        }]
      },

      /* fonts */
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: constants.fontsFilename
          }
        }]
      }
    ],

    noParse: [
      /angular\/angular.js/,
      /lodash\/lodash.js/
    ]
  },
  resolve: {
    modules: [
      path.join(constants.root, "node_modules")
    ],
    extensions: [
      ".tsx",
      ".ts",
      ".js"
    ]
  },
  plugins: [
    /**
     * A webpack plugin to remove/clean your build folder(s) before building
     * https://git.io/v5Bzh
     */
    new CleanWebpackPlugin([constants.buildDirectory], {
      root: constants.root
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: constants.manifestName,
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      title: "Title from HtmlWebpackPlugin",
      template: constants.indexPath,
      minify: {
        collapseWhitespace: true
      }
    }),

    /* This is a webpack plugin that inline your chunks that is written as
     * links or script using HtmlWebpackPlugin
     * https://git.io/v5Bzi
     */
    new InlineChunkWebpackPlugin({
      inlineChunks: [constants.manifestName]
    }),

    new ForkTsCheckerWebpackPlugin(),

    /**
     * https://webpack.js.org/plugins/module-concatenation-plugin
     */
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale/,
      /(en-gb)\.js/
    ),

    /* new CopyWebpackPlugin([
      {
        from: path.resolve("../node_modules/pdfmake/build/pdfmake.min.js"),
        to: path.join("../build", "pdfmake.min.js")
      },
      {
        from: path.resolve("../node_modules/pdfmake/build/vfs_fonts.js"),
        to: path.join("../build", "vfs_fonts.js")
      }
    ]),

    new webpack.ProvidePlugin({
      pdfMake: "pdfMake"
    }),

    new webpack.DefinePlugin({
      pdfMake: JSON.stringify("pdfMake")
    }) */
  ]
};

module.exports = config;
