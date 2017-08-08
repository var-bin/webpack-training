const commonConfig = require("./buildUtils/webpack.common");
const moduleConfig = require("./buildUtils/webpack.module");
const pluginsConfig = require("./buildUtils/webpack.plugins");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
  return webpackMerge(commonConfig, moduleConfig, pluginsConfig, {
    devtool: env === "dev" ? "source-map" : false
  });
};
