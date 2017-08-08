// commonPaths.js

"use strict";

const path = require("path");

module.exports = {
  outputPath: path.resolve(__dirname, "../build"),
  outputFilename: "bundle.js",
  entryPath: path.resolve("./src/index.ts")
};
