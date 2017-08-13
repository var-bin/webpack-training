// webpack.common.js

"use strict";

const commonPaths = require("./commonPaths");

const config = {
  entry: {
    index: commonPaths.entryPaths.index,
    vendors: commonPaths.entryPaths.vendors
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: commonPaths.outputFilename,
    path: commonPaths.outputPath
  }
};

module.exports = config;
