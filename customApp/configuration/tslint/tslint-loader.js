// tslint-loader.js

"use strict";

const TS_LINT_CONFIG = "./configuration/tslint/tslint.json";

// https://github.com/wbuchwalter/tslint-loader
module.exports = {
  // can specify a custom config file relative to current directory or with absolute path
  configFile: TS_LINT_CONFIG,

  // tslint errors are displayed by default as warnings
  // set emitErrors to true to display them as errors
  emitErrors: false,

  // tslint does not interrupt the compilation by default
  // if you want any file with tslint errors to fail
  // set failOnHint to true
  failOnHint: false
};
