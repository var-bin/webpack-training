// about.js

"use strict";

import { welcome } from "../welcome/welcome";

if (NODE_ENV == DEV_ENV) {
  welcome("home");
  console.log(NODE_ENV);
}

export { welcome };
