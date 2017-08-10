// webpack.dev.js

"use strict";

const config = {
  devtool: env === "dev" ? "source-map" : false
};

module.exports = config;
