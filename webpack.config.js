"use strict";

const webpack = require("webpack");

const DEV_ENV = "development";
const PRODUCTION_ENV = "production";
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
      DEV_ENV: JSON.stringify(DEV_ENV),
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

if (NODE_ENV == PRODUCTION_ENV) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // don't show anreachable variables etc
        warnings: false,
        drop_console: false,
        unsafe: true
      }
    })
  )
}
