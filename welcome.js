// welcome.js

"use strict";

function welcome(message) {
  if (NODE_ENV == "development") {
    debugger;
  }

  alert(`Welcome ${message}`);
}

export { welcome };
