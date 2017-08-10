// commonPaths.js

"use strict";

const path = require("path");

const config = {
  outputPath: path.resolve(__dirname, "../build"),
  outputFilename: "bundle.js",
  entryPath: path.resolve("./src/index.ts")
};

module.exports = config;
