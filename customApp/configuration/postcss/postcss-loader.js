// postcss-loader.js

const POSTCSS_CONFIG_FILE = "./configuration/postcss/postcss.config.js";

// https://github.com/postcss/postcss-loader

const config = {
  config: {
    path: POSTCSS_CONFIG_FILE
  }
};

module.exports = config;
