// webpack.config.js

"use strict";

const commonConfig = require("./buildUtils/webpack.common");
const webpackMerge = require("webpack-merge");

const ENV = process.env.NODE_ENV;
console.log(`ENV: ${ENV}`);

module.exports = (env) => {
  console.log(env);

  const envConfig = require(`./buildUtils/webpack.${env}`);

  return webpackMerge(commonConfig, envConfig);
}
