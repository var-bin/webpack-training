// home.js

"use strict";

import { welcome } from "../welcome/welcome";
import angular from "angular";

let old = require("old");

if (NODE_ENV == DEV_ENV) {
  welcome("home");
  console.log(NODE_ENV);
}

require.ensure(["../loadVendors/loadVendors"], (require) => {
  let vendors = require("../loadVendors/loadVendors");

  vendors.loadVendors();
});

old();

export { welcome };
