// webpack.prod.js

"use strict";

const os = require("os");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const config = {
  plugins: [
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
