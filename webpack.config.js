"use strict";

const webpack = require("webpack");

const DEV_ENV = "development";
const NODE_ENV = process.env.NODE_ENV || DEV_ENV;

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },

  watch: NODE_ENV == DEV_ENV,

  watchOptions: {
    aggregateOptions: 100
  },

  devtool: NODE_ENV == DEV_ENV ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
    })
  ],

  resolve: {
    modulesDirectories: ["node_modules"],
    extentions: ["", ".js"]
  },

  resolveLoader: {
    modulesDirectories: ["node_modules"],
    moduleTemplates: ["*-loader", "*"],
    extentions: ["", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
};
