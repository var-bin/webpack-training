// home.js

"use strict";

import { welcome } from "./welcome";

if (NODE_ENV == "development") {
  welcome("home");
}

export { welcome };
