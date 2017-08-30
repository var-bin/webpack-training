// webpack.prod.js

"use strict";

const os = require("os");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = {
  plugins: [
    new UglifyJSPlugin({
      parallel: {
        cache: true,
        workers: os.cpus().length
      }
    })
  ]
};

module.exports = config;
