"use strict";

const webpack = require("webpack");
const path = require("path");

const DEV_ENV = "development";
const PRODUCTION_ENV = "production";
const NODE_ENV = process.env.NODE_ENV || DEV_ENV;

const SRC_PATH = path.join(__dirname, "src")
const DEST_PATH = path.join(__dirname, "public");

const COMMON_NAME = "common";

module.exports = {
  // The base directory (absolute path!) for resolving the entry option
  // http://webpack.github.io/docs/configuration.html#context
  context: SRC_PATH,

  // The entry point for the bundles.
  // http://webpack.github.io/docs/configuration.html#entry
  entry: {
    home: "./home/home",
    about: "./about/about"
  },

  // Output options tell Webpack how to write the compiled files to disk.
  // http://webpack.github.io/docs/configuration.html#output
  output: {
    path: DEST_PATH,
    publicPath: "/",
    filename: "[name].js",
    library: "[name]"
  },

  // Watch files for changes.
  // This can be also used in combination with webpack-stream (and gulp for example).
  watch: NODE_ENV == DEV_ENV,

  watchOptions: {
    aggregateOptions: 100
  },

  // Choose a developer tool to enhance debugging.
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: NODE_ENV == DEV_ENV ? "cheap-inline-module-source-map" : null,

  // Add additional plugins to the compiler.
  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      DEV_ENV: JSON.stringify(DEV_ENV),
      LANG: '"ru"'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: COMMON_NAME,
      chunks: [
        "about",
        "home"
      ]
    }),

    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /(en-gb)$/),

    new webpack.ProvidePlugin({
      jquery: "$"
    })
  ],

  // Options affecting the resolving of modules.
  // http://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    modulesDirectories: ["node_modules", "node_modules/pdfmake/build/"],
    extentions: ["", ".js"]
  },

  // Like resolve but for loaders.
  // http://webpack.github.io/docs/configuration.html#resolveloader
  resolveLoader: {
    modulesDirectories: ["node_modules"],
    moduleTemplates: ["*-loader", "*"],
    extentions: ["", ".js"]
  },

  // An array of automatically applied loaders.
  // http://webpack.github.io/docs/configuration.html#module-loaders
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/src/",
        loader: "babel"
      }
    ],

    noParse: [
      /angular\/angular.js/,
      /pdfmake.min.js/,
      /vfs_fonts.js/,
      /lodash/
    ]
  },

  externals: {
    jquery: "$"
  }
};

// Uglify JavaScript files if NODE_ENV == PRODUCTION_ENV
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
