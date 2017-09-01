// postcss.config.js

"use strict";

const config = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions"]
    })
  ]
};

module.exports = config;
