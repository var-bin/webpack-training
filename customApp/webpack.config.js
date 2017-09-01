// webpack.config.js

"use strict";

const commonConfig = require("./buildUtils/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
  const envConfig = require(`./buildUtils/webpack.${env}`);

  return webpackMerge(commonConfig, envConfig);
}
