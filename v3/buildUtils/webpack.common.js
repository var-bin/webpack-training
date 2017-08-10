// webpack.common.js

"use strict";

const commonPaths = require("./commonPaths");

const config = {
  entry: commonPaths.entryPath,
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: commonPaths.outputFilename,
    path: commonPaths.outputPath
  }
};

module.exports = config;
