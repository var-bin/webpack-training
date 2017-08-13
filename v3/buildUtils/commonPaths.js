// commonPaths.js

"use strict";

const path = require("path");

const config = {
  outputPath: path.resolve(__dirname, "../build"),
  outputFilename: "[name].bundle.js",
  entryPaths: {
    index: path.resolve("./src/index.ts"),
    vendors: path.resolve("./src/vendors.ts")
  },
  webpackConfigPath: path.resolve(__dirname, "..")
};

module.exports = config;
