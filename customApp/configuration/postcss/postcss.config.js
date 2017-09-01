// postcss.config.js

"use strict";

const config = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions"]
    }),
    require("postcss-csso")()
  ]
};

module.exports = config;
